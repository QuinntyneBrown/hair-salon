namespace HairSalon.Dtos
{
    public class PhotoAddOrUpdateResponseDto: PhotoDto
    {
        public PhotoAddOrUpdateResponseDto(HairSalon.Models.Photo entity)
            :base(entity)
        {

        }
    }
}
