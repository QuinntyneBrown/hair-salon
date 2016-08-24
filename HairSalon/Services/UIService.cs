using System;
using System.Collections.Generic;
using HairSalon.Data;
using HairSalon.Dtos;
using System.Data.Entity;
using System.Linq;
using HairSalon.Models;

namespace HairSalon.Services
{
    public class UIService : IUIService
    {
        public UIService(IUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.UIs;
            this.cache = cacheProvider.GetCache();
        }

        public UIAddOrUpdateResponseDto AddOrUpdate(UIAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) repository.Add(entity = new UI());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new UIAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<UIDto> Get()
        {
            ICollection<UIDto> response = new HashSet<UIDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new UIDto(entity)); }    
            return response;
        }


        public UIDto GetById(int id)
        {
            return new UIDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        public UIDto GetByName(string name)
        {
            return new UIDto(repository.GetAll().Where(x => x.Name == name && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IUow uow;
        protected readonly IRepository<UI> repository;
        protected readonly ICache cache;
    }
}
