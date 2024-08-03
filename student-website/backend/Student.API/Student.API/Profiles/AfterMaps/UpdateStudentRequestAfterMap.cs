using AutoMapper;
using Student.API.DataModels;
using Student.API.DomainModels;

namespace Student.API.Profiles.AfterMaps
{
    public class UpdateStudentRequestAfterMap : IMappingAction<UpdateStudentRequest, DataModels.Students>
    {
        public void Process(UpdateStudentRequest source, Students destination, ResolutionContext context)
        {
            destination.Address = new DataModels.Address()
            {
                PhysicalAddress = source.PhysicalAddress,
                PostalAddress = source.PostalAddress,
            };
        }
    }
}
