namespace HairSalon.Dtos
{
    public class SocialShareItemDto
    {
        public SocialShareItemDto(HairSalon.Models.SocialShareItem entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public SocialShareItemDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
