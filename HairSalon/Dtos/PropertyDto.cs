namespace HairSalon.Dtos
{
    public class PropertyDto
    {
        public PropertyDto(HairSalon.Models.Property entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public PropertyDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
