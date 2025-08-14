import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeesService } from '../../../services/employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  standalone: true, 
  imports: [CommonModule, FormsModule], 
  templateUrl: './add-employee.html',
  styleUrls: ['./add-employee.css']
})
export class AddEmployee implements OnInit {
  addEmployeeRequest: Employee = {
    id:'',
    name:'',
    email:'',
    phone:0,
    salary:0,
    department:''
  };
  constructor(private employeesService: EmployeesService,private router: Router) {}

  ngOnInit(): void {
    // Initialization logic can go here
  }
addEmployee(){
  this.employeesService.addEmployee(this.addEmployeeRequest).subscribe({
    next: (employee) => {
      this.router.navigate(['/employees']);
    },
    error: (error) => {
      console.error(error);
    }
  });
  console.log("Employee added:", this.addEmployeeRequest);
}
  // Method to handle form submission or other actions can be added here

}
