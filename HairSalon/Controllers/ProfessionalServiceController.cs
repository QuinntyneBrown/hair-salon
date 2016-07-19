using HairSalon.Dtos;
using HairSalon.Services;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Description;

namespace HairSalon.Controllers
{
    [Authorize]
    [RoutePrefix("api/professionalService")]
    public class ProfessionalServiceController : ApiController
    {
        public ProfessionalServiceController(IProfessionalServiceService professionalServiceService)
        {
            _professionalServiceService = professionalServiceService;
        }

        [Route("add")]
        [HttpPost]
        [ResponseType(typeof(ProfessionalServiceAddOrUpdateResponseDto))]
        public IHttpActionResult Add(ProfessionalServiceAddOrUpdateRequestDto dto) { return Ok(_professionalServiceService.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        [ResponseType(typeof(ProfessionalServiceAddOrUpdateResponseDto))]
        public IHttpActionResult Update(ProfessionalServiceAddOrUpdateRequestDto dto) { return Ok(_professionalServiceService.AddOrUpdate(dto)); }

        [Route("get")]
        [AllowAnonymous]
        [HttpGet]
        [ResponseType(typeof(ICollection<ProfessionalServiceDto>))]
        public IHttpActionResult Get() { return Ok(_professionalServiceService.Get()); }

        [Route("getById")]
        [HttpGet]
        [ResponseType(typeof(ProfessionalServiceDto))]
        public IHttpActionResult GetById(int id) { return Ok(_professionalServiceService.GetById(id)); }

        [Route("remove")]
        [HttpDelete]
        [ResponseType(typeof(int))]
        public IHttpActionResult Remove(int id) { return Ok(_professionalServiceService.Remove(id)); }

        protected readonly IProfessionalServiceService _professionalServiceService;


    }
}
