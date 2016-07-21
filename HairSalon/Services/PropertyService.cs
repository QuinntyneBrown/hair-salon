using System;
using System.Collections.Generic;
using HairSalon.Data;
using HairSalon.Dtos;
using System.Data.Entity;
using System.Linq;
using HairSalon.Models;

namespace HairSalon.Services
{
    public class PropertyService : IPropertyService
    {
        public PropertyService(IUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Properties;
            this.cache = cacheProvider.GetCache();
        }

        public PropertyAddOrUpdateResponseDto AddOrUpdate(PropertyAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) repository.Add(entity = new Property());
            entity.Name = request.Name;
            entity.IsDynamic = request.IsDynamic;
            entity.Key = request.Key;
            entity.Value = request.Value;
            entity.BaseUri = request.BaseUri;
            entity.Uri = request.Uri;
            entity.HtmlBody = request.HtmlBody;
            uow.SaveChanges();
            return new PropertyAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<PropertyDto> Get()
        {
            ICollection<PropertyDto> response = new HashSet<PropertyDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new PropertyDto(entity)); }    
            return response;
        }


        public PropertyDto GetById(int id)
        {
            return new PropertyDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IUow uow;
        protected readonly IRepository<Property> repository;
        protected readonly ICache cache;
    }
}
