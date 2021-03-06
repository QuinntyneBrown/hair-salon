using System;
using System.Collections.Generic;
using System.Linq;
namespace HairSalon.Dtos
{
    public class DigitalAssetDto
    {
        public DigitalAssetDto(HairSalon.Models.DigitalAsset entity, bool includeRelatedEntities = false)
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

            if (includeRelatedEntities)
            {
                Galleries = entity.GalleryDigitalAssets.Select(x => new GalleryDto(x.Gallery)).ToList();
            }
            
        }

        public DigitalAssetDto()
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
