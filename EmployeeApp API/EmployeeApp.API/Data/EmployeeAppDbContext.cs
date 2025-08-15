using EmployeeApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace EmployeeApp.API.Data
{
    public class EmployeeAppDbContext: DbContext
    {
        public EmployeeAppDbContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Employee> Employees { get; set; }
    }
}
