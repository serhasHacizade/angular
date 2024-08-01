using AutoMapper;

namespace Student.API.Profiles
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Student.API.DataModels.Students, Student.API.DomainModels.Student>().ReverseMap();
            CreateMap<Student.API.DataModels.Gender, Student.API.DomainModels.Gender>().ReverseMap();
            CreateMap<Student.API.DataModels.Address, Student.API.DomainModels.Address>().ReverseMap();
        }
    }
}
