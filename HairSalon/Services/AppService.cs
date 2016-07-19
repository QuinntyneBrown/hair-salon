using System;
using System.Collections.Generic;
using HairSalon.Data;
using HairSalon.Dtos;
using System.Data.Entity;
using System.Linq;
using HairSalon.Models;

namespace HairSalon.Services
{
    public class AppService : IAppService
    {
        public AppService(IUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Apps;
            this.cache = cacheProvider.GetCache();
        }

        public AppAddOrUpdateResponseDto AddOrUpdate(AppAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) repository.Add(entity = new App());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new AppAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<AppDto> Get()
        {
            ICollection<AppDto> response = new HashSet<AppDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new AppDto(entity)); }    
            return response;
        }


        public AppDto GetById(int id)
        {
            return new AppDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IUow uow;
        protected readonly IRepository<App> repository;
        protected readonly ICache cache;
    }
}
