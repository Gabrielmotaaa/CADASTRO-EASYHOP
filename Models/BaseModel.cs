using ControledeContatos.Data;
using Microsoft.EntityFrameworkCore;
using System.Runtime.CompilerServices;

namespace CADASTRO_EASYHOP.Models
{
    public class OtherBase : DbContext
    {
        public OtherBase(DbContextOptions<OtherBase> options) : base(options)
        {
        }

        // DbSets and configuration
    }
}
