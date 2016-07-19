using HairSalon.Dtos;
using System.Collections.Generic;

namespace HairSalon.Services
{
    public interface IPropertyService
    {
        PropertyAddOrUpdateResponseDto AddOrUpdate(PropertyAddOrUpdateRequestDto request);
        ICollection<PropertyDto> Get();
        PropertyDto GetById(int id);
        dynamic Remove(int id);
    }
}
