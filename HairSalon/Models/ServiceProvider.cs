namespace HairSalon.Models
{
    public class ServiceProvider
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ServiceProviderType Type { get; set; }
        public bool IsDeleted { get; set; }
    }
}
