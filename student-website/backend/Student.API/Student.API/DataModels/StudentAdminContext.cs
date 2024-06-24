using Microsoft.EntityFrameworkCore;
using Student.API.DataModels;

namespace StudentAdminContext
{
    public class EntityDbContext : DbContext
    {
        string baglanti = "Server=ERENSALIH\\SQLSERVER;DataBase=Deneme;Trusted_Connection=True;TrustServerCertificate=True;";
        public DbSet<Address> Addresses { get; set; }
        public DbSet<Gender> Genders { get; set; }
        public DbSet<Students> Students { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(baglanti);
        }
    }
}
