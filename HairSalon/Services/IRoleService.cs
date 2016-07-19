using HairSalon.Dtos;
using System.Collections.Generic;

namespace HairSalon.Services
{
    public interface IRoleService
    {
        RoleAddOrUpdateResponseDto AddOrUpdate(RoleAddOrUpdateRequestDto request);
        ICollection<RoleDto> Get();
        RoleDto GetById(int id);
        dynamic Remove(int id);
    }
}
