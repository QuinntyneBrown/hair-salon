using System.Collections.Generic;

namespace HairSalon.Models
{
    public class ProfessionalService
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<ProfessionalServicePhoto> ProfessionalServicePhotos = new HashSet<ProfessionalServicePhoto>();
        public bool IsDeleted { get; set; }
    }
}
