namespace Student.API.Repositories
{
    public interface IStudentRepository
    {
        Task<List<Student.API.DataModels.Students>> GetAllStudentsAsync();
        Task<Student.API.DataModels.Students> GetStudentAsync(Guid studentId);

        Task<List<Student.API.DataModels.Gender>> GetGendersAsync();
        Task<bool> Exists(Guid studentId);
        Task<Student.API.DataModels.Students> UpdateStudent(Guid studentId, Student.API.DataModels.Students student);
        Task<Student.API.DataModels.Students> DeleteStudent(Guid studentId);
    }
}
