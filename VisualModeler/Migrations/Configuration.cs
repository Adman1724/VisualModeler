namespace VisualModeler.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<VisualModeler.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            ContextKey = "VisualModeler.Models.ApplicationDbContext";
        }

        protected override void Seed(VisualModeler.Models.ApplicationDbContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
            var c = new Models.CanvasObjectModel();
            c.Created = DateTime.Now;
            c.Edited = DateTime.Now;
            c.Name = "p1";
            c.Type = Models.CanvasType.CLASS;
            c.Path = "//local";
           
            var p = new Models.ProjectObjectModel();
            p.Created = DateTime.Now;
            p.Edited = DateTime.Now;
            p.Name = "p1";
            p.Type = Models.ProjectType.UML;
            p.Canvases.Add(c);
            c.Project = p;
            context.Projects.AddOrUpdate(p );
            context.Canvases.AddOrUpdate(c);
        }
    }
}
