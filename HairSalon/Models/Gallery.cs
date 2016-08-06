using System.Collections.Generic;

namespace HairSalon.Models
{
    public class Gallery
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Headline { get; set; }
        public string AlternateHeadline { get; set; }
        public string Description { get; set; }
        public bool IsDeleted { get; set; }
        public ICollection<GalleryCategory> GalleryCategories { get; set; } = new HashSet<GalleryCategory>();
        public ICollection<GalleryDigitalAsset> GalleryPhotos { get; set; } = new HashSet<GalleryDigitalAsset>();
    }
}
