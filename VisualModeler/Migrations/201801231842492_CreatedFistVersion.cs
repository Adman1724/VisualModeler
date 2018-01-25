namespace VisualModeler.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CreatedFistVersion : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.CanvasObjectModels",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Path = c.String(),
                        Type = c.Int(nullable: false),
                        Created = c.DateTime(nullable: false),
                        Edited = c.DateTime(nullable: false),
                        Project_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.ProjectObjectModels", t => t.Project_Id)
                .Index(t => t.Project_Id);
            
            CreateTable(
                "dbo.ProjectObjectModels",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Type = c.Int(nullable: false),
                        Created = c.DateTime(nullable: false),
                        Edited = c.DateTime(nullable: false),
                        ApplicationUser_Id = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.ApplicationUser_Id)
                .Index(t => t.ApplicationUser_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.ProjectObjectModels", "ApplicationUser_Id", "dbo.AspNetUsers");
            DropForeignKey("dbo.CanvasObjectModels", "Project_Id", "dbo.ProjectObjectModels");
            DropIndex("dbo.ProjectObjectModels", new[] { "ApplicationUser_Id" });
            DropIndex("dbo.CanvasObjectModels", new[] { "Project_Id" });
            DropTable("dbo.ProjectObjectModels");
            DropTable("dbo.CanvasObjectModels");
        }
    }
}
