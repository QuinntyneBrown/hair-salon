namespace HairSalon.Services
{
    public class ViewModelService : IViewModelService
    {
        public ViewModelService(IUIService uiService)
        {
            _uiService = uiService;
        }

        public dynamic Get(string name)
        {
            return new object();
        }

        protected readonly IUIService _uiService;
    }
}
