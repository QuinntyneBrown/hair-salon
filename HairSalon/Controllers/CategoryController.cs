using HairSalon.Dtos;
using HairSalon.Services;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Description;

namespace HairSalon.Controllers
{
    [Authorize]
    [RoutePrefix("api/category")]
    public class CategoryController : ApiController
    {
        public CategoryController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [Route("add")]
        [HttpPost]
        [ResponseType(typeof(CategoryAddOrUpdateResponseDto))]
        public IHttpActionResult Add(CategoryAddOrUpdateRequestDto dto) { return Ok(_categoryService.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        [ResponseType(typeof(CategoryAddOrUpdateResponseDto))]
        public IHttpActionResult Update(CategoryAddOrUpdateRequestDto dto) { return Ok(_categoryService.AddOrUpdate(dto)); }

        [Route("get")]
        [AllowAnonymous]
        [HttpGet]
        [ResponseType(typeof(ICollection<CategoryDto>))]
        public IHttpActionResult Get() { return Ok(_categoryService.Get()); }

        [Route("getById")]
        [HttpGet]
        [ResponseType(typeof(CategoryDto))]
        public IHttpActionResult GetById(int id) { return Ok(_categoryService.GetById(id)); }

        [Route("remove")]
        [HttpDelete]
        [ResponseType(typeof(int))]
        public IHttpActionResult Remove(int id) { return Ok(_categoryService.Remove(id)); }

        protected readonly ICategoryService _categoryService;


    }
}
