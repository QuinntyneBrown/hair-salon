using System;
using System.Collections.Generic;
using System.Linq;
namespace HairSalon.Dtos
{
    public class PhotoDto
    {
        public PhotoDto(HairSalon.Models.Photo entity)
        {
            Id = entity.Id;
            Name = entity.Name;
            FileName = entity.FileName;
            Description = entity.Description;
            Created = entity.Created;
            FileModified = entity.FileModified;
            Size = entity.Size;
            ContentType = entity.ContentType;
            RelativePath = entity.RelativePath;

            Galleries = entity.GalleryPhotos.Select(x => new GalleryDto(x.Gallery)).ToList();
        }

        public PhotoDto()
        {

        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string FileName { get; set; }
        public string Description { get; set; }
        public DateTime? Created { get; set; }
        public DateTime? FileModified { get; set; }
        public long? Size { get; set; }
        public string ContentType { get; set; }
        public string RelativePath { get; set; }
        public Guid? UniqueId { get; set; }
        public ICollection<GalleryDto> Galleries { get; set; }
        
    }
}
