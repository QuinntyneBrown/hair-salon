using HairSalon.Dtos;
using System.Collections.Generic;

namespace HairSalon.Services
{
    public interface IServiceProviderService
    {
        ServiceProviderAddOrUpdateResponseDto AddOrUpdate(ServiceProviderAddOrUpdateRequestDto request);
        ICollection<ServiceProviderDto> Get();
        ServiceProviderDto GetById(int id);
        dynamic Remove(int id);
    }
}
