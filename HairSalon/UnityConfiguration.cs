using HairSalon.Configuration;
using HairSalon.Data;
using HairSalon.Services;
using HairSalon.Utilities;
using Microsoft.Practices.Unity;
using Microsoft.Practices.Unity.InterceptionExtension;

namespace HairSalon
{
    public class UnityConfiguration
    {
        public static IUnityContainer GetContainer()
        {
            var container = new UnityContainer().AddNewExtension<Interception>();
            container.RegisterType<IDbContext, DataContext>();
            container.RegisterType<IUow, Uow>();
            container.RegisterType<IRepositoryProvider, RepositoryProvider>();
            container.RegisterType<IIdentityService, IdentityService>();
            container.RegisterType<ILoggerFactory, LoggerFactory>();
            container.RegisterType<ICacheProvider, CacheProvider>();
            container.RegisterType<IEncryptionService, EncryptionService>();
            container.RegisterType<ILogger, Logger>();
            container.RegisterType<IServiceProviderService, ServiceProviderService>();
            container.RegisterType<IAppService, AppService>();
            container.RegisterType<IContactService, ContactService>();
            container.RegisterType<ICustomerService, CustomerService>();
            container.RegisterType<IUIService, UIService>();
            container.RegisterType<ISectionService, SectionService>();
            container.RegisterType<IPropertyService, PropertyService>();
            container.RegisterType<IDigitalAssetService, PhotoService>();
            container.RegisterType<IGalleryService, GalleryService>();
            container.RegisterType<IUserService, UserService>();            
            container.RegisterType<ISocialShareItemService, SocialShareItemService>();
            container.RegisterType<IProfessionalServiceService, ProfessionalServiceService>();
            container.RegisterType<IMenuItemService, MenuItemService>();
            container.RegisterType<IMenuService, MenuService>();
            container.RegisterType<IViewModelService, ViewModelService>();

            container.RegisterInstance(AuthConfiguration.LazyConfig);   
            container.RegisterInstance(TraceConfiguration.LazyConfig);         
            return container;
        }
    }
}
