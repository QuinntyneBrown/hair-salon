using HairSalon.Dtos;
using System.Collections.Generic;

namespace HairSalon.Services
{
    public interface ISectionService
    {
        SectionAddOrUpdateResponseDto AddOrUpdate(SectionAddOrUpdateRequestDto request);
        ICollection<SectionDto> Get();
        SectionDto GetById(int id);
        dynamic Remove(int id);
    }
}
