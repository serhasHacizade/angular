using Azure.Core;
using Microsoft.EntityFrameworkCore;
using Student.API.DataModels;
using StudentAdminContext;

namespace Student.API.Repositories
{
    public class SqlStudentRepository : IStudentRepository
    {
        private readonly EntityDbContext context;

        public SqlStudentRepository(EntityDbContext context)
        {
            this.context = context;
        }

        public async Task<Students> AddStudent(Students request)
        {
            var student = await context.Students.AddAsync(request);
            await context.SaveChangesAsync();
            return student.Entity;
        }

        public async Task<Students> DeleteStudent(Guid studentId)
        {
            var existingStudent = await GetStudentAsync(studentId);
            if (existingStudent != null)
            {
                context.Students.Remove(existingStudent);
                await context.SaveChangesAsync();
                return existingStudent;
            }
            return null;
        }

        public async Task<bool> Exists(Guid studentId)
        {
            return await context.Students.AnyAsync(x => x.Id == studentId);
        }

        public async Task<List<DataModels.Students>> GetAllStudentsAsync()
        {
            return await context.Students.Include(nameof(Gender)).Include(nameof(Address)).ToListAsync();
        }

        public async Task<List<Gender>> GetGendersAsync()
        {
            return await context.Genders.ToListAsync();
        }

        public async Task<Students> GetStudentAsync(Guid studentId)
        {
            return await context.Students.Include(nameof(Gender)).Include(nameof(Address)).FirstOrDefaultAsync(x => x.Id == studentId);
        }

        public  async Task<Students> UpdateStudent(Guid studentId, Students request)
        {
            var existingStudent = await GetStudentAsync(studentId);
            if (existingStudent!= null)
            {
                existingStudent.FirstName = request.FirstName;
                existingStudent.LastName = request.LastName;
                existingStudent.DateOfBirth = request.DateOfBirth;
                existingStudent.Email = request.Email;
                existingStudent.Mobile = request.Mobile;
                existingStudent.GenderId = request.GenderId;
                existingStudent.Address.PhysicalAddress = request.Address.PhysicalAddress;
                existingStudent.Address.PostalAddress = request.Address.PostalAddress;

                await context.SaveChangesAsync();
                return existingStudent;
            }
            return null;
        }
    }
}
