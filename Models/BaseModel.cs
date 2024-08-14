using Microsoft.EntityFrameworkCore;
using System.Runtime.CompilerServices;

namespace CADASTRO_EASYHOP.Models
{
    public class BaseModel
    {

        public int Base { get; set; }
        public int senha { get; set; }


        public string Email { get; set; }
        public string Dispositivo { get; set; }
        public string Modelo {  get; set; }
        public string NumeroSerie { get; set; }




    }

    public class BaseContext : DbContext
    {
        public BaseContext(DbContextOptions<BaseContext> options) : base(options)
        {
        }

        public DbSet<DerivedEntity> DerivedEntities { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<DerivedEntity>()
                .HasKey(e => e.Id); // Define primary key for derived entities

            // If BaseModel should not have a table, configure it as keyless
            modelBuilder.Entity<BaseModel>(entity =>
            {
                entity.HasNoKey(); // Configure as keyless if BaseModel is not mapped to a table
            });

            base.OnModelCreating(modelBuilder);
        }
    }
}
