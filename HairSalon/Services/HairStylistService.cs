using System;
using System.Collections.Generic;
using HairSalon.Dtos;
using HairSalon.Data;
using System.Linq;

namespace HairSalon.Services
{
    public class HairStylistService : IHairStylistService
    {
        public HairStylistService(IUow uow, ICacheProvider cacheProvider)
        {
            _uow = uow;
            _repository = uow.HairStylists;
            _cache = cacheProvider.GetCache();
        }

        public HairStylistAddOrUpdateResponseDto AddOrUpdate(HairStylistAddOrUpdateRequestDto request)
        {
            var entity = _repository.GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) _repository.Add(entity = new Models.HairStylist());
            entity.Name = request.Name;
            _uow.SaveChanges();
            return new HairStylistAddOrUpdateResponseDto(entity);
        }

        public ICollection<HairStylistDto> Get()
        {
            ICollection<HairStylistDto> response = new HashSet<HairStylistDto>();
            var entities = _repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach (var entity in entities) { response.Add(new HairStylistDto(entity)); }
            return response;
        }

        public HairStylistDto GetById(int id)
        {
            return new HairStylistDto(_repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        public dynamic Remove(int id)
        {
            var entity = _repository.GetById(id);
            entity.IsDeleted = true;
            _uow.SaveChanges();
            return id;
        }

        protected readonly IUow _uow;
        protected readonly IRepository<Models.HairStylist> _repository;
        protected readonly ICache _cache;
    }
}
