import { Component } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-employees-list',
  imports: [NgIf, NgFor],
  templateUrl: './employees-list.html',
  styleUrls: ['./employees-list.css']
})
export class EmployeesList {
  employees: Employee[]=[
  {
    id: 'EMP001',
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    phone: 94771234567,
    salary: 85000,
    department: 'Human Resources'
  },
  {
    id: 'EMP002',
    name: 'Ravi Perera',
    email: 'ravi.perera@example.com',
    phone: 94771239876,
    salary: 95000,
    department: 'Finance'
  },
  {
    id: 'EMP003',
    name: 'Sophia Lee',
    email: 'sophia.lee@example.com',
    phone: 94771231234,
    salary: 78000,
    department: 'IT'
  }
  ];
  constructor() {}
  ngOnInit(): void{
 }
}
