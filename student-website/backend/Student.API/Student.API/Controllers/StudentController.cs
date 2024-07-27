using Microsoft.AspNetCore.Mvc;
using Student.API.Repositories;
using Student.API.DomainModels;
using AutoMapper;

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
        [Route("[controller]/{studentId:guid}")]
        public async Task<IActionResult> GetAllStudentAsync([FromRoute] Guid studentId)
        {
            var student = await studentRepository.GetStudentAsync(studentId);
            if (student == null)
            {
                return NotFound();
            }
            return Ok(mapper.Map<Student.API.DomainModels.Student>(student));
        }
    }
}
