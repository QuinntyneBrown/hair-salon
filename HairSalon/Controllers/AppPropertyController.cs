using HairSalon.Dtos;
using HairSalon.Services;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Description;

namespace HairSalon.Controllers
{
    [Authorize]
    [RoutePrefix("api/appProperty")]
    public class AppPropertyController : ApiController
    {
        public AppPropertyController(IPropertyService propertyService)
        {
            _propertyService = propertyService;
        }
        
        protected readonly IPropertyService _propertyService;

    }
}
