namespace Student.API.Repositories
{
    public interface IStudentRepository
    {
        Task<List<Student.API.DataModels.Students>> GetAllStudentsAsync();
    }
}
