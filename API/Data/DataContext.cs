using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<AppUser>Users {get; set;}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AppUser>()
            .HasData(
                new AppUser( 1, "Bob"),
                new AppUser (2, "Tom"),
                new AppUser (3, "Janer")
            );
        }
    }
}