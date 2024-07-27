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

       

        public async Task<List<DataModels.Students>> GetAllStudentsAsync()
        {
            return await context.Students.Include(nameof(Gender)).Include(nameof(Address)).ToListAsync();
        }
        public async Task<Students> GetStudentAsync(Guid studentId)
        {
            return await context.Students.Include(nameof(Gender)).Include(nameof(Address)).FirstOrDefaultAsync(x => x.Id == studentId);
        }
    }
}
