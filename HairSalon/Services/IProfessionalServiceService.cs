using HairSalon.Dtos;
using System.Collections.Generic;

namespace HairSalon.Services
{
    public interface IProfessionalServiceService
    {
        ProfessionalServiceAddOrUpdateResponseDto AddOrUpdate(ProfessionalServiceAddOrUpdateRequestDto request);
        ICollection<ProfessionalServiceDto> Get();
        ProfessionalServiceDto GetById(int id);
        dynamic Remove(int id);
    }
}
