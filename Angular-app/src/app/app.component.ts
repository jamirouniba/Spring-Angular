import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HomeComponent } from "./Pages/home/home.component";
import { ContactsComponent } from "./Pages/contacts/contacts.component";
import { AboutComponent } from "./Pages/about/about.component";
import { NavbarComponent } from "./Pages/navbar/navbar.component";
import { FooterComponent } from "./Pages/footer/footer.component";
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { EmployeeListComponent } from "./employee/employee-list/employee-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeListComponent, HomeComponent, ContactsComponent, 
            AboutComponent, NavbarComponent, FooterComponent,CreateEmployeeComponent,
            UpdateEmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-app';
}
