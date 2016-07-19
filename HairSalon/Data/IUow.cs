namespace HairSalon.Data
{
    public interface IUow
    {
        IRepository<Models.HairStylist> HairStylists { get; }
        void SaveChanges();
    }
}
