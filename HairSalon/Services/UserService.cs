using System;
using System.Collections.Generic;
using HairSalon.Data;
using HairSalon.Dtos;
using System.Data.Entity;
using System.Linq;
using HairSalon.Models;

namespace HairSalon.Services
{
    public class UserService : IUserService
    {
        public UserService(IUow uow, ICacheProvider cacheProvider)
        {
            this._uow = uow;
            this.repository = uow.Users;
            this.cache = cacheProvider.GetCache();
        }

        public UserAddOrUpdateResponseDto AddOrUpdate(UserAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) repository.Add(entity = new User());
            entity.Name = request.Name;
            _uow.SaveChanges();
            return new UserAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            _uow.SaveChanges();
            return id;
        }

        public ICollection<UserDto> Get()
        {
            ICollection<UserDto> response = new HashSet<UserDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new UserDto(entity)); }    
            return response;
        }


        public UserDto GetById(int id)
        {
            return new UserDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        public CurrentUserResponseDto Current(string username)
            => new CurrentUserResponseDto(_uow.Users
                .GetAll()
                .Where(x => x.IsDeleted == false)
                .Single(x => x.Username == username));

        protected readonly IUow _uow;
        protected readonly IRepository<User> repository;
        protected readonly ICache cache;
    }
}
