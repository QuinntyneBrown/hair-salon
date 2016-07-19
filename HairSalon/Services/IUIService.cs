using HairSalon.Dtos;
using System.Collections.Generic;

namespace HairSalon.Services
{
    public interface IUIService
    {
        UIAddOrUpdateResponseDto AddOrUpdate(UIAddOrUpdateRequestDto request);
        ICollection<UIDto> Get();
        UIDto GetById(int id);
        dynamic Remove(int id);
    }
}
