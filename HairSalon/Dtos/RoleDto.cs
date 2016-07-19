namespace HairSalon.Dtos
{
    public class RoleDto
    {
        public RoleDto(HairSalon.Models.Role entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public RoleDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
