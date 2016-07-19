namespace HairSalon.Dtos
{
    public class UIDto
    {
        public UIDto(HairSalon.Models.UI entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public UIDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
