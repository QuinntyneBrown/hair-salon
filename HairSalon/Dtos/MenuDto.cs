namespace HairSalon.Dtos
{
    public class MenuDto
    {
        public MenuDto(HairSalon.Models.Menu entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public MenuDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
