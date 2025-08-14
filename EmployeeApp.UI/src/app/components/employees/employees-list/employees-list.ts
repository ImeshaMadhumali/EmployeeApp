import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { NgIf, NgFor } from '@angular/common';
import { EmployeesService } from '../../../services/employees.service';

@Component({
  selector: 'app-employees-list',
  standalone: true,         
  imports: [NgIf, NgFor],    
  templateUrl: './employees-list.html',
  styleUrls: ['./employees-list.css']
})
export class EmployeesList implements OnInit {
  employees: Employee[] = [];

  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {
   this.employeesService.getAllEmployees().subscribe({
  next: (employees) => {
    console.log('Received from API:', employees);
    this.employees = employees;
  },
  error: (error) => {
    console.error('Error fetching employees:', error);
  }
});

  }
}
