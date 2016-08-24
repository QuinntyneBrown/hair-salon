using HairSalon.Dtos;
using System.Collections.Generic;

namespace HairSalon.Services
{
    public interface IUIService
    {
        UIAddOrUpdateResponseDto AddOrUpdate(UIAddOrUpdateRequestDto request);
        ICollection<UIDto> Get();
        UIDto GetById(int id);
        UIDto GetByName(string name);
        dynamic Remove(int id);
    }
}
