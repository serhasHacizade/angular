namespace Student.API.Repositories
{
    public interface IStudentRepository
    {
        List<Student.API.DataModels.Students> GetStudents();
    }
}
