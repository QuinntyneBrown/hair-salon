namespace HairSalon.Dtos
{
    public class PhotoDto
    {
        public PhotoDto(HairSalon.Models.Photo entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public PhotoDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
