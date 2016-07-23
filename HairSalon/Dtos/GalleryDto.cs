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
            Photos = entity.GalleryPhotos.Select(x => new PhotoDto(x.Photo)).ToList();
        }

        public GalleryDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<PhotoDto> Photos { get; set; } = new HashSet<PhotoDto>();
    }
}
