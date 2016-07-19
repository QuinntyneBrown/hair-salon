using HairSalon.Dtos;
using System.Collections.Generic;

namespace HairSalon.Services
{
    public interface IMenuItemService
    {
        MenuItemAddOrUpdateResponseDto AddOrUpdate(MenuItemAddOrUpdateRequestDto request);
        ICollection<MenuItemDto> Get();
        MenuItemDto GetById(int id);
        dynamic Remove(int id);
    }
}
