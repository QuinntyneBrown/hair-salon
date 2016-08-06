using System.ComponentModel.DataAnnotations.Schema;

namespace HairSalon.Models
{
    public class ProfessionalServiceDigitalAsset
    {
        public int Id { get; set; }
        [ForeignKey("ProfessionalService")]
        public int? ProfiessionalServiceId { get; set; }
        [ForeignKey("DigitalAsset")]
        public int? DigitalAssetId { get; set; }
        public ProfessionalService ProfessionalService { get; set; }
        public DigitalAsset DigitalAsset { get; set; }
    }
}
