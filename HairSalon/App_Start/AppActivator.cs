using System.Data.Entity.Migrations;
using WebActivatorEx;

[assembly: PostApplicationStartMethod(typeof(HairSalon.AppActivator), "PostStart")]

namespace HairSalon
{
    public class AppActivator
    {
        public static void PostStart()
        {

        }
    }
}
