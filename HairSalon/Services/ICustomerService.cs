using HairSalon.Dtos;
using System.Collections.Generic;

namespace HairSalon.Services
{
    public interface ICustomerService
    {
        CustomerAddOrUpdateResponseDto AddOrUpdate(CustomerAddOrUpdateRequestDto request);
        ICollection<CustomerDto> Get();
        CustomerDto GetById(int id);
        dynamic Remove(int id);
    }
}
