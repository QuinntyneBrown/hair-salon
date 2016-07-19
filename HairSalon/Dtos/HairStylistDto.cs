namespace HairSalon.Dtos
{
    public class HairStylistDto
    {
        public HairStylistDto()
        {

        }

        public HairStylistDto(Models.HairStylist entity)
        {
            Id = entity.Id;
            Name = entity.Name;
        }

        public int? Id { get; set; }
        public string Name { get; set; }
    }
}
