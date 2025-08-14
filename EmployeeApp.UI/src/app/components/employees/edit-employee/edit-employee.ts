import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../../../services/employees.service';
import { Employee } from '../../../models/employee.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-employee',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-employee.html',
  styleUrls: ['./edit-employee.css']
})
export class EditEmployee implements OnInit {
  employeeDetails: Employee={
    id:'',
    name:'',
    email:'',
    phone:0,
    salary:0,
    department:''
  };

  constructor(private route: ActivatedRoute, private employeesService: EmployeesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
   
    if (id) {
      this.employeesService.getEmployee(id).subscribe({
        next:(response)=>{
          this.employeeDetails=response;
        }
      });
    }
   }
  });
 }

 updateEmployee(){
  this.employeesService.updateEmployee(this.employeeDetails.id,this.employeeDetails)
  .subscribe({
    next: (response) => {
      this.router.navigate(['/employees']);
    },
    error: (error) => {
      console.error('Error updating employee:', error);
    }
  });
 }

 deleteEmployee(id:string){
  this.employeesService.deleteEmployee(id)
  .subscribe({
    next: (response) => {
      this.router.navigate(['/employees']);
    },
    error: (error) => {
      console.error(error);
    }
  });
 }
}
