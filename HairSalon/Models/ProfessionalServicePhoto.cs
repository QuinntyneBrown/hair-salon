using System.ComponentModel.DataAnnotations.Schema;

namespace HairSalon.Models
{
    public class ProfessionalServicePhoto
    {
        public int Id { get; set; }
        [ForeignKey("ProfessionalService")]
        public int? ProfiessionalServiceId { get; set; }
        [ForeignKey("Photo")]
        public int? PhotoId { get; set; }
        public ProfessionalService ProfessionalService { get; set; }
        public Photo Photo { get; set; }
    }
}
