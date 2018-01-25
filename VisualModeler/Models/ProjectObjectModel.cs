using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VisualModeler.Models
{
    public class ProjectObjectModel
    {
        public ProjectObjectModel()
        {
            this.Canvases = new List<CanvasObjectModel>();
        }
        public int Id { get; set; }
        public String Name { get; set; }
        public ProjectType Type { get; set; }
        public DateTime Created { get; set; }
        public DateTime Edited { get; set; }
        public ApplicationUser Owner { get; set; }
        public List<CanvasObjectModel> Canvases { get; set; }
    }
}