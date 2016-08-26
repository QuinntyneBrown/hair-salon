using HairSalon.Dtos.ViewModels;
using HairSalon.Services;
using System.Web.Http;
using System.Web.Http.Description;

namespace HairSalon.Controllers
{
    [AllowAnonymous]
    [RoutePrefix("api/viewmodel")]
    public class ViewModelController: ApiController
    {
        public ViewModelController(IViewModelService viewModelService)
        {
            _viewModelService = viewModelService;
        }

        [Route("getByName")]
        [HttpGet]
        [ResponseType(typeof(BaseViewModelDto))]
        public IHttpActionResult GetByName(string name) {
            return Ok(_viewModelService.Get(name));
        }

        protected readonly IViewModelService _viewModelService;
    }
}
