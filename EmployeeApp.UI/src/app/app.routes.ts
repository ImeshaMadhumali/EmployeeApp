import { Routes } from '@angular/router';
import { EmployeesList } from './components/employees/employees-list/employees-list';
export const routes: Routes = [
    {
        path: '',
        component : EmployeesList
    },
    {
        path: 'employees',
        component : EmployeesList
    }
];
