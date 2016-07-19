using HairSalon.Dtos;
using HairSalon.Services;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Description;

namespace HairSalon.Controllers
{
    [Authorize]
    [RoutePrefix("api/photo")]
    public class PhotoController : ApiController
    {
        public PhotoController(IPhotoService photoService)
        {
            _photoService = photoService;
        }

        [Route("add")]
        [HttpPost]
        [ResponseType(typeof(PhotoAddOrUpdateResponseDto))]
        public IHttpActionResult Add(PhotoAddOrUpdateRequestDto dto) { return Ok(_photoService.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        [ResponseType(typeof(PhotoAddOrUpdateResponseDto))]
        public IHttpActionResult Update(PhotoAddOrUpdateRequestDto dto) { return Ok(_photoService.AddOrUpdate(dto)); }

        [Route("get")]
        [AllowAnonymous]
        [HttpGet]
        [ResponseType(typeof(ICollection<PhotoDto>))]
        public IHttpActionResult Get() { return Ok(_photoService.Get()); }

        [Route("getById")]
        [HttpGet]
        [ResponseType(typeof(PhotoDto))]
        public IHttpActionResult GetById(int id) { return Ok(_photoService.GetById(id)); }

        [Route("remove")]
        [HttpDelete]
        [ResponseType(typeof(int))]
        public IHttpActionResult Remove(int id) { return Ok(_photoService.Remove(id)); }

        protected readonly IPhotoService _photoService;


    }
}
