using Microsoft.Practices.Unity;
using HairSalon.Services;
using System.Linq;

namespace HairSalon.Helpers
{
    public static class FrontEndPreCacheHelper
    {
        public static void PreCache() {
            var uow = UnityConfiguration.GetContainer().Resolve<IAppService>();
            var app = uow.Get().FirstOrDefault();
            var serializedApp = Newtonsoft.Json.JsonConvert.SerializeObject(app);
        }
    }
}
