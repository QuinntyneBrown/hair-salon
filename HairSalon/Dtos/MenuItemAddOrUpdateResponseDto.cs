namespace HairSalon.Dtos
{
    public class MenuItemAddOrUpdateResponseDto: MenuItemDto
    {
        public MenuItemAddOrUpdateResponseDto(HairSalon.Models.MenuItem entity)
            :base(entity)
        {

        }
    }
}
