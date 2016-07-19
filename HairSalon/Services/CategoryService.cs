using System;
using System.Collections.Generic;
using HairSalon.Data;
using HairSalon.Dtos;
using System.Data.Entity;
using System.Linq;
using HairSalon.Models;

namespace HairSalon.Services
{
    public class CategoryService : ICategoryService
    {
        public CategoryService(IUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Categories;
            this.cache = cacheProvider.GetCache();
        }

        public CategoryAddOrUpdateResponseDto AddOrUpdate(CategoryAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) repository.Add(entity = new Category());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new CategoryAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<CategoryDto> Get()
        {
            ICollection<CategoryDto> response = new HashSet<CategoryDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new CategoryDto(entity)); }    
            return response;
        }


        public CategoryDto GetById(int id)
        {
            return new CategoryDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IUow uow;
        protected readonly IRepository<Category> repository;
        protected readonly ICache cache;
    }
}
