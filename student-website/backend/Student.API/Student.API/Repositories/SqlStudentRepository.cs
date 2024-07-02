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


        public List<DataModels.Students> GetStudents()
        {
            return context.Students.ToList();
        }
    }
}
