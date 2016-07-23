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
            Photos = entity.ProfessionalServicePhotos.Select(x => new PhotoDto(x.Photo)).ToList();
        }

        public ProfessionalServiceDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<PhotoDto> Photos { get; set; } = new HashSet<PhotoDto>();
    }
}
