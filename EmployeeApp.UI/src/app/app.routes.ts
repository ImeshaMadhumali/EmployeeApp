import { Routes } from '@angular/router';
import { EmployeesList } from './components/employees/employees-list/employees-list';
import { AddEmployee } from './components/employees/add-employee/add-employee';
import { EditEmployee } from './components/employees/edit-employee/edit-employee';
export const routes: Routes = [
    {
        path: '',
        component : EmployeesList
    },
    {
        path: 'employees',
        component : EmployeesList
    },
    {
        path: 'employees/add',
        component : AddEmployee
    },
    {
        path: 'employees/edit/:id',
        component : EditEmployee
    }
];
