using Microsoft.AspNetCore.Mvc;
using Student.API.Repositories;
using Student.API.DomainModels;
using AutoMapper;
using Student.API.DataModels;

namespace Student.API.Controllers
{
    [ApiController]
    public class StudentController : Controller
    {
        
        private readonly IStudentRepository studentRepository;
        private readonly IMapper mapper;
        public StudentController(IStudentRepository studentRepository, IMapper mapper)
        {
            this.studentRepository = studentRepository;
            this.mapper = mapper;
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
        [Route("[controller]/Add")]
        public async Task<IActionResult> AddStudentAsync([FromBody] AddStudentRequest request)
        {
            var student = await studentRepository.AddStudent(mapper.Map<DataModels.Students>(request));
            return CreatedAtAction(nameof(GetStudentAsync), new {studentId = student.Id}, mapper.Map<Student.API.DomainModels.Student>(student));
        }
    }
}
