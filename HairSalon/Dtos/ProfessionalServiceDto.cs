namespace HairSalon.Dtos
{
    public class ProfessionalServiceDto
    {
        public ProfessionalServiceDto(HairSalon.Models.ProfessionalService entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public ProfessionalServiceDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
