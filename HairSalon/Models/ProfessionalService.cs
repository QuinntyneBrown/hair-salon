using System.Collections.Generic;

namespace HairSalon.Models
{
    public class ProfessionalService
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<ProfessionalServiceDigitalAsset> ProfessionalServicePhotos = new HashSet<ProfessionalServiceDigitalAsset>();
        public bool IsDeleted { get; set; }
    }
}
