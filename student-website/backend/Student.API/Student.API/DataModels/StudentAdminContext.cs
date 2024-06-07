using Microsoft.EntityFrameworkCore;

namespace StudentAdminContext
{
    public class EntityDbContext : DbContext
    {
        string baglanti = "Server=ERENSALIH\SQLSERVER;DataBase=Deneme;Trusted_Connection=True;TrustServerCertificate=True;";

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(baglanti);
        }
    } 
}
