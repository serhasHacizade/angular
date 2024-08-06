using Microsoft.AspNetCore.Mvc;
using Student.API.Repositories;
using Student.API.DomainModels;
using AutoMapper;
using Student.API.DataModels;
using Microsoft.AspNetCore.Http.HttpResults;

namespace Student.API.Controllers
{
    [ApiController]
    public class StudentController : Controller
    {
        
        private readonly IStudentRepository studentRepository;
        private readonly IImageRepository IImageRepository;
        private readonly IMapper mapper;
        public StudentController(IStudentRepository studentRepository, IMapper mapper, IImageRepository IImageRepository)
        {
            this.studentRepository = studentRepository;
            this.mapper = mapper;
            this.IImageRepository = IImageRepository;
        }

        [HttpGet]
        [Route("[controller]")]
        public async Task<IActionResult> GetAllStudentsAsync()
        {
            var students = await studentRepository.GetAllStudentsAsync();
            return Ok(mapper.Map<List<Student.API.DomainModels.Student>>(students));
        }
        [HttpGet]
        [Route("[controller]/{studentId:guid}"), ActionName("GetStudentAsync")]
        public async Task<IActionResult> GetStudentAsync([FromRoute] Guid studentId)
        {
            var student = await studentRepository.GetStudentAsync(studentId);
            if (student == null)
            {
                return NotFound();
            }
            return Ok(mapper.Map<Student.API.DomainModels.Student>(student));
        }
        [HttpPut]
        [Route("[controller]/{studentId:guid}")]
        public async Task<IActionResult> UpdateStudentAsync([FromRoute] Guid studentId, [FromBody] UpdateStudentRequest request)
        {
            if (await studentRepository.Exists(studentId))
            {
                var updatedStudent = await studentRepository.UpdateStudent(studentId, mapper.Map<DataModels.Students>(request));
                if (updatedStudent != null)
                {
                    return Ok(mapper.Map<Student.API.DomainModels.Student>(updatedStudent));
                }
            }
            return NotFound();
        }
        [HttpDelete]
        [Route("[controller]/{studentId:guid}")]
        public async Task<IActionResult> DeleteStudentAsync([FromRoute] Guid studentId)
        {
            if (await studentRepository.Exists(studentId))
            {
                var student = await studentRepository.DeleteStudent(studentId);
                if (student != null)
                {
                    return Ok(mapper.Map<Student.API.DomainModels.Student>(student));
                }
            }
            return NotFound();
        }
        [HttpPost]
        [Route("[controller]/{studentId:guid}/upload-image")]
        public async Task<IActionResult> UploadImage([FromRoute] Guid studentId, IFormFile profileImage)
        {
            var validExtensions = new List<string>
            {
                ".jpeg",".png",".gif",".jpg"
            };
            if (profileImage != null & profileImage.Length > 0)
            {
                var extension = Path.GetExtension(profileImage.FileName);

                if (validExtensions.Contains(extension))
                {
                    if (await studentRepository.Exists(studentId))
                    {
                        var fileName = Guid.NewGuid() + Path.GetExtension(profileImage.FileName);
                        var fileImagePath = await IImageRepository.Upload(profileImage, fileName);
                        if (await studentRepository.UpdateProfileImage(studentId, fileImagePath))
                        {
                            return Ok(fileImagePath);
                        }
                        return StatusCode(StatusCodes.Status500InternalServerError, "Error uploading image");
                    }
                }
                return BadRequest("This is not a valid Image format");
            }
            return NotFound();
        }
        
    }
}
