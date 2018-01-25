using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using VisualModeler.Models;

namespace VisualModeler.Controllers
{
    public class EditorController : Controller
    {
        // GET: Editor
        [Authorize]
        public ActionResult Index(int? id)
        {
            
            if (id == null)
            {
                return HttpNotFound();
            }
            ApplicationDbContext db = new ApplicationDbContext();
            var obj = db.Canvases.Where(c => c.Id == id).FirstOrDefault();
            if (obj == null)
            {
                return HttpNotFound();
            }
            
            return View(obj);
        }
    }
}