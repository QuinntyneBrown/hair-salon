﻿using HairSalon.Models;
using System.Collections.Generic;

namespace HairSalon.Dtos
{
    public class DigitalAssetUploadResponseDto
    {
        public DigitalAssetUploadResponseDto()
        {

        }

        public DigitalAssetUploadResponseDto(ICollection<DigitalAsset> photos)
        {
            foreach (var photo in photos)
            {
                Files.Add(new DigitalAssetDto(photo));
            }
        }

        public IList<DigitalAssetDto> Files { get; set; } = new List<DigitalAssetDto>();
    }
}
