using HairSalon.Dtos;
using System.Collections.Generic;

namespace HairSalon.Services
{
    public interface IMenuService
    {
        MenuAddOrUpdateResponseDto AddOrUpdate(MenuAddOrUpdateRequestDto request);
        ICollection<MenuDto> Get();
        MenuDto GetById(int id);
        dynamic Remove(int id);
    }
}
