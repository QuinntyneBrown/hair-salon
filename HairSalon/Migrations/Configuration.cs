namespace HairSalon.Migrations
{
    using System.Data.Entity.Migrations;

    internal sealed class Configuration : DbMigrationsConfiguration<HairSalon.Data.DataContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            AutomaticMigrationDataLossAllowed = true;
        }

        protected override void Seed(HairSalon.Data.DataContext context)
        {
            UserConfiguration.Seed(context);
            AppConfiguration.Seed(context);
            DigitalAssetConfiguration.Seed(context);
        }
    }
}
