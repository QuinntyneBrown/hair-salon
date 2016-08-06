using System.Collections.Generic;
using System.Linq;

namespace HairSalon.Dtos
{
    public class GalleryDto
    {
        public GalleryDto(HairSalon.Models.Gallery entity)
        {
            Id = entity.Id;
            Name = entity.Name;
            Photos = entity.GalleryPhotos.Select(x => new DigitalAssetDto(x.DigitalAsset)).ToList();
        }

        public GalleryDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<DigitalAssetDto> Photos { get; set; } = new HashSet<DigitalAssetDto>();
    }
}
