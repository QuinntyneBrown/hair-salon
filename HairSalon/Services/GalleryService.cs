using System;
using System.Collections.Generic;
using HairSalon.Data;
using HairSalon.Dtos;
using System.Data.Entity;
using System.Linq;
using HairSalon.Models;

namespace HairSalon.Services
{
    public class GalleryService : IGalleryService
    {
        public GalleryService(IUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Galleries;
            this.cache = cacheProvider.GetCache();
        }

        public GalleryAddOrUpdateResponseDto AddOrUpdate(GalleryAddOrUpdateRequestDto request)
        {
            var entity = GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) repository.Add(entity = new Gallery());
            entity.Name = request.Name;
            entity.GalleryPhotos.Clear();

            foreach(var photo in request.Photos)
            {
                entity.GalleryPhotos.Add(new GalleryPhoto() { Photo = uow.Photos.GetById(photo.Id) });                
            }

            uow.SaveChanges();
            return new GalleryAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<GalleryDto> Get()
        {
            ICollection<GalleryDto> response = new HashSet<GalleryDto>();
            var entities = GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new GalleryDto(entity)); }    
            return response;
        }


        public GalleryDto GetById(int id)
        {
            return new GalleryDto(GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        public IQueryable<Gallery> GetAll() => repository.GetAll()
            .Include(x => x.GalleryCategories)
            .Include(x => x.GalleryPhotos)
            .Include("GalleryPhotos.Photo");

        protected readonly IUow uow;
        protected readonly IRepository<Gallery> repository;
        protected readonly ICache cache;
    }
}
