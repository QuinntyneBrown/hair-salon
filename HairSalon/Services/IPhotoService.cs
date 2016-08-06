using HairSalon.Dtos;
using System.Collections.Generic;

namespace HairSalon.Services
{
    public interface IDigitalAssetService
    {
        DigitalAssetAddOrUpdateResponseDto AddOrUpdate(DigitalAssetAddOrUpdateRequestDto request);
        ICollection<DigitalAssetDto> Get();
        DigitalAssetDto GetById(int id);
        dynamic Remove(int id);
    }
}
