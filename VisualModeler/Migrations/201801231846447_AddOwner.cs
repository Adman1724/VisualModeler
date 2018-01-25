namespace VisualModeler.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddOwner : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.ProjectObjectModels", name: "ApplicationUser_Id", newName: "Owner_Id");
            RenameIndex(table: "dbo.ProjectObjectModels", name: "IX_ApplicationUser_Id", newName: "IX_Owner_Id");
        }
        
        public override void Down()
        {
            RenameIndex(table: "dbo.ProjectObjectModels", name: "IX_Owner_Id", newName: "IX_ApplicationUser_Id");
            RenameColumn(table: "dbo.ProjectObjectModels", name: "Owner_Id", newName: "ApplicationUser_Id");
        }
    }
}
