using Angular9Project3.Models;
using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular9Project3.Data
{
    public class AngularBackendContext : DbContext
    {
        public AngularBackendContext(DbContextOptions<AngularBackendContext> options) : base(options)
        {
        }

        public DbSet<Page> Pages { get; set; }
    }
}
