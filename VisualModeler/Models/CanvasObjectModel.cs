using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VisualModeler.Models
{
    public class CanvasObjectModel
    {
        public CanvasObjectModel()
        {

        }
        public int Id { get; set; }
        public String Name { get; set; }
        public String Path { get; set; }
        public CanvasType Type { get; set; }
        public DateTime Created { get; set; }
        public DateTime Edited { get; set; }
        public ProjectObjectModel Project { get; set; }
        
    }
}