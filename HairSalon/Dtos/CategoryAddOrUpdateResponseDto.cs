namespace HairSalon.Dtos
{
    public class CategoryAddOrUpdateResponseDto: CategoryDto
    {
        public CategoryAddOrUpdateResponseDto(HairSalon.Models.Category entity)
            :base(entity)
        {

        }
    }
}
