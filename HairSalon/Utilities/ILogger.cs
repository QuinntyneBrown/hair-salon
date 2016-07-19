namespace HairSalon.Utilities
{
    public interface ILogger
    {
        void AddProvider(ILoggerProvider provider);
    }
}
