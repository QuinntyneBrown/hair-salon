using HairSalon.Dtos;
using System.Collections.Generic;

namespace HairSalon.Services
{
    public interface IHairStylistService
    {
        HairStylistAddOrUpdateResponseDto AddOrUpdate(HairStylistAddOrUpdateRequestDto request);
        ICollection<HairStylistDto> Get();
        HairStylistDto GetById(int id);
        dynamic Remove(int id);
    }
}
