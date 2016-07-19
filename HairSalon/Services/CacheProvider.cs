using HairSalon.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HairSalon.Services
{
    public class CacheProvider : ICacheProvider
    {
        public ICache GetCache()
        {
            return MemoryCache.Current;
        }
    }
}
