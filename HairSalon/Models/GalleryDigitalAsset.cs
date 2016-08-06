﻿using System.ComponentModel.DataAnnotations.Schema;

namespace HairSalon.Models
{
    public class GalleryDigitalAsset
    {
        public int Id { get; set; }
        [ForeignKey("Gallery")]
        public int? GalleryId { get; set; }
        [ForeignKey("DigitalAsset")]
        public int? DigitalAssetId { get; set; }
        public Gallery Gallery { get; set; }
        public DigitalAsset DigitalAsset { get; set; }
    }
}
