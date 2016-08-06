using HairSalon.Data;
using HairSalon.Models;
using System.Data.Entity.Migrations;
using System.Linq;

namespace HairSalon.Migrations
{
    public class UserConfiguration
    {
        public static void Seed(DataContext context)
        {
            if (context.Users.FirstOrDefault(x => x.Username == "quinntyne@hotmail.com") == null)
            {
                var user = new User()
                {
                    Username = "quinntyne@hotmail.com",
                    Firstname = "Quinntyne",
                    Lastname = "Brown",
                    Password = "XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=",
                };
                context.Users.AddOrUpdate(user);
                context.SaveChanges();
            }

            if (context.Users.FirstOrDefault(x => x.Username == "cindy.luke@hotmail.com") == null)
            {
                var user = new User()
                {
                    Username = "cindy.luke@hotmail.com",
                    Firstname = "Cindy",
                    Lastname = "Luke",
                    Password = "XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=",
                };
                context.Users.AddOrUpdate(user);
                context.SaveChanges();
            }
        }
    }
}
