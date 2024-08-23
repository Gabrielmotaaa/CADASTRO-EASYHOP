using System.Collections.Generic;
using System.Linq;
using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ControledeContatos.Data{

public class Base : DbContext
{
    public Base(DbContextOptions<Base> options) : base(options)
    {
    }
}

}