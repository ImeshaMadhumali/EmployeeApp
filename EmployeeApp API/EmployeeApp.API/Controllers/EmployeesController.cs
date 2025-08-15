using EmployeeApp.API.Data;
using EmployeeApp.API.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EmployeeApp.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
 
    public class EmployeesController : ControllerBase
    {
        private readonly EmployeeAppDbContext _employeeAppDbContext;
            public EmployeesController(EmployeeAppDbContext employeeAppDbContext) 
        {
            _employeeAppDbContext = employeeAppDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllEmployees()
        {
          var employees = await _employeeAppDbContext.Employees.ToListAsync();
            return Ok(employees);
        }
        [HttpPost]
        public async Task<IActionResult> AddEmployee([FromBody] Employee employeeRequest)
        {
            employeeRequest.Id = Guid.NewGuid();
            await _employeeAppDbContext.Employees.AddAsync(employeeRequest);
            await _employeeAppDbContext.SaveChangesAsync();

            return Ok(employeeRequest);
           
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetEmployee(Guid id)
        {
            var employee = await _employeeAppDbContext.Employees.FirstOrDefaultAsync(x => x.Id==id);

            if (employee == null)
            {
                return NotFound();
            }
            return Ok(employee);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateEmployee([FromRoute] Guid id, Employee updateEmployeeRequest)
        {
            var employee = await _employeeAppDbContext.Employees.FindAsync(id);

            if (employee == null)
            {
                return NotFound();
            }
            employee.Name = updateEmployeeRequest.Name;
            employee.Email = updateEmployeeRequest.Email;
            employee.Salary = updateEmployeeRequest.Salary;
            employee.Phone = updateEmployeeRequest.Phone;
            employee.Department = updateEmployeeRequest.Department;

            await _employeeAppDbContext.SaveChangesAsync();

            return Ok(employee);

        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteEmployee([FromBody] Guid id)
        {
            var employee = await _employeeAppDbContext.Employees.FindAsync(id);

            if (employee == null)
            {
                return NotFound();
            }

            _employeeAppDbContext.Employees.Remove(employee);
            await _employeeAppDbContext.SaveChangesAsync();

            return Ok(employee);
        }
    } 

}
