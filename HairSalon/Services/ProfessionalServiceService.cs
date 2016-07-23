using System;
using System.Collections.Generic;
using HairSalon.Data;
using HairSalon.Dtos;
using System.Data.Entity;
using System.Linq;
using HairSalon.Models;

namespace HairSalon.Services
{
    public class ProfessionalServiceService : IProfessionalServiceService
    {
        public ProfessionalServiceService(IUow uow, ICacheProvider cacheProvider)
        {
            this._uow = uow;
            this._repository = uow.ProfessionalServices;
            this._cache = cacheProvider.GetCache();
        }

        public ProfessionalServiceAddOrUpdateResponseDto AddOrUpdate(ProfessionalServiceAddOrUpdateRequestDto request)
        {
            var entity = _repository.GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) _repository.Add(entity = new ProfessionalService());
            entity.Name = request.Name;
            entity.ProfessionalServicePhotos.Clear();

            foreach (var photo in request.Photos)
            {
                entity.ProfessionalServicePhotos.Add(new ProfessionalServicePhoto() { Photo = _uow.Photos.GetById(photo.Id) });
            }
            _uow.SaveChanges();
            return new ProfessionalServiceAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = _repository.GetById(id);
            entity.IsDeleted = true;
            _uow.SaveChanges();
            return id;
        }

        public ICollection<ProfessionalServiceDto> Get()
        {
            ICollection<ProfessionalServiceDto> response = new HashSet<ProfessionalServiceDto>();
            var entities = GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new ProfessionalServiceDto(entity)); }    
            return response;
        }


        public ProfessionalServiceDto GetById(int id)
        {
            return new ProfessionalServiceDto(GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        public IQueryable<ProfessionalService> GetAll() => _repository.GetAll()
            .Include(x => x.ProfessionalServicePhotos)
            .Include("ProfessionalServicePhotos.Photo");

        protected readonly IUow _uow;
        protected readonly IRepository<ProfessionalService> _repository;
        protected readonly ICache _cache;
    }
}
