using HairSalon.Dtos;
using HairSalon.Services;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Description;

namespace HairSalon.Controllers
{
    [Authorize]
    [RoutePrefix("api/hairStylist")]
    public class HairStylistController : ApiController
    {
        public HairStylistController(IHairStylistService hairStylistService)
        {
            _hairStylistService = hairStylistService;
        }

        [Route("add")]
        [HttpPost]
        [ResponseType(typeof(HairStylistAddOrUpdateResponseDto))]
        public IHttpActionResult Add(HairStylistAddOrUpdateRequestDto dto) { return Ok(_hairStylistService.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        [ResponseType(typeof(HairStylistAddOrUpdateResponseDto))]
        public IHttpActionResult Update(HairStylistAddOrUpdateRequestDto dto) { return Ok(_hairStylistService.AddOrUpdate(dto)); }

        [Route("get")]
        [AllowAnonymous]
        [HttpGet]
        [ResponseType(typeof(ICollection<HairStylistDto>))]
        public IHttpActionResult Get() { return Ok(_hairStylistService.Get()); }

        [Route("getById")]
        [HttpGet]
        [ResponseType(typeof(HairStylistDto))]
        public IHttpActionResult GetById(int id) { return Ok(_hairStylistService.GetById(id)); }

        [Route("remove")]
        [HttpDelete]
        [ResponseType(typeof(int))]
        public IHttpActionResult Remove(int id) { return Ok(_hairStylistService.Remove(id)); }

        protected readonly IHairStylistService _hairStylistService;


    }
}
