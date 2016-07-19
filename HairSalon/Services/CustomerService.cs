using System;
using System.Collections.Generic;
using HairSalon.Data;
using HairSalon.Dtos;
using System.Data.Entity;
using System.Linq;
using HairSalon.Models;

namespace HairSalon.Services
{
    public class CustomerService : ICustomerService
    {
        public CustomerService(IUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Customers;
            this.cache = cacheProvider.GetCache();
        }

        public CustomerAddOrUpdateResponseDto AddOrUpdate(CustomerAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) repository.Add(entity = new Customer());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new CustomerAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<CustomerDto> Get()
        {
            ICollection<CustomerDto> response = new HashSet<CustomerDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new CustomerDto(entity)); }    
            return response;
        }


        public CustomerDto GetById(int id)
        {
            return new CustomerDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IUow uow;
        protected readonly IRepository<Customer> repository;
        protected readonly ICache cache;
    }
}
