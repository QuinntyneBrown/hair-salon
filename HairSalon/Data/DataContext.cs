using HairSalon.Models;
using System.Data.Entity;

namespace HairSalon.Data
{
    public class DataContext: DbContext, IDbContext
    {
        public DataContext()
            : base(nameOrConnectionString: "HairSalonDataContext")
        {
            Configuration.ProxyCreationEnabled = false;
            Configuration.LazyLoadingEnabled = false;
            Configuration.AutoDetectChangesEnabled = true;
        }

        public DbSet<ServiceProvider> ServiceProviders { get; set; }        
        public DbSet<App> Apps { get; set; }
        public DbSet<UI> UIs { get; set; }
        public DbSet<Section> Sections { get; set; }
        public DbSet<Property> Properties { get; set; }
        public DbSet<DigitalAsset> Photos { get; set; }
        public DbSet<Gallery> Galleries { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Category> Categories { get; set; }        
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<SocialShareItem> SocialShareItems { get; set; }
        public DbSet<ProfessionalService> ProfessionalServices { get; set; }
        public DbSet<Menu> Menus { get; set; }
        public DbSet<MenuItem> MenuItems { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {

        } 
    }
}
