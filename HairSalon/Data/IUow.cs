using HairSalon.Models;

namespace HairSalon.Data
{
    public interface IUow
    {
        IRepository<ServiceProvider> ServiceProviders { get; }
        IRepository<App> Apps { get; }
        IRepository<UI> UIs { get; }
        IRepository<Section> Sections { get; }
        IRepository<Property> Properties { get; }
        IRepository<Photo> Photos { get; }
        IRepository<Gallery> Galleries { get; }
        IRepository<User> Users { get; }
        IRepository<Role> Roles { get; }
        IRepository<Customer> Customers { get; }
        IRepository<Category> Categories { get; }
        IRepository<Contact> Contacts { get; }
        IRepository<SocialShareItem> SocialShareItems { get; }
        IRepository<ProfessionalService> ProfessionalServices { get; }
        IRepository<Menu> Menus { get; }
        IRepository<MenuItem> MenuItems { get; }
        void SaveChanges();
    }
}
