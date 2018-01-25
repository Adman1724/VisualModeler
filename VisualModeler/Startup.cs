using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(VisualModeler.Startup))]
namespace VisualModeler
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
