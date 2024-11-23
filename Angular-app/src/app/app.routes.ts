import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactsComponent } from './Pages/contacts/contacts.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';

export const routes: Routes = [

    { 'path' : 'home', 'title':'Home', component:HomeComponent},
    { 'path' : 'about','title':'About', component:AboutComponent},
    { 'path' : 'contacts', 'title':'Contacts',component:ContactsComponent},
    { 'path' : 'login', 'title':'Login',component:LoginComponent},
    { 'path' : 'signup', 'title':'SignUp',component:SignupComponent},
    { 'path' : 'employees', 'title':'Employees',component:EmployeeListComponent },
    { 'path' : 'employees/create', 'title':'Create Employee',component:CreateEmployeeComponent },
    { 'path' : 'employees/update/:id', 'title':'Update Employee',component:UpdateEmployeeComponent },
    { 'path' : '', 'redirectTo':'/home',pathMatch: 'full'},
    { 'path' : '**', 'title':'404', component:PageNotFoundComponent},




];
