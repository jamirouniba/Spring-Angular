import { Component, OnInit } from '@angular/core';
import { Employee } from '../data_service/employee';
import {FormGroup,ReactiveFormsModule,Validators, FormsModule, FormBuilder} from "@angular/forms"
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../data_service/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit{

  employeeForm!: FormGroup;

  constructor ( private fb: FormBuilder,
    private employeeService : EmployeeService,
    private router: Router,
  ){  }


  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]]

    })  
  }

  onSubmit() {
   const employee = this.employeeForm.value;
    // Here you would typically make an HTTP POST request to your Spring Boot API
    console.log('Submitting form:', employee);
    this.employeeService.addEmployee(employee).subscribe(
      result => {
        console.log('Employee added successfully:', result);
        this.router.navigate(['/employees']);
      
      },
      error => {
        console.error('Error adding employee:', error);
      }
    );

    // Clear the form after submission
    this.employeeForm.reset();
  }

}
