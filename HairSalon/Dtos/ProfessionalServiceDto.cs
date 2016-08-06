using System.Collections.Generic;
using System.Linq;

namespace HairSalon.Dtos
{
    public class ProfessionalServiceDto
    {
        public ProfessionalServiceDto(HairSalon.Models.ProfessionalService entity)
        {
            Id = entity.Id;
            Name = entity.Name;
            Photos = entity.ProfessionalServicePhotos.Select(x => new DigitalAssetDto(x.DigitalAsset)).ToList();
        }

        public ProfessionalServiceDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<DigitalAssetDto> Photos { get; set; } = new HashSet<DigitalAssetDto>();
    }
}
