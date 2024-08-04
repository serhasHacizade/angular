using AutoMapper;
using Student.API.DataModels;
using Student.API.DomainModels;
using System.Net.NetworkInformation;

namespace Student.API.Profiles.AfterMaps
{
    public class AddStudentRequestAfterMap : IMappingAction<AddStudentRequest, DataModels.Students>
    {
        public void Process(AddStudentRequest source, Students destination, ResolutionContext context)
        {
            destination.Id = Guid.NewGuid();
            destination.Address = new DataModels.Address()
            {
                Id = Guid.NewGuid(),
                PhysicalAddress = source.PhysicalAddress,
                PostalAddress = source.PostalAddress
            };
        }
    }
}
