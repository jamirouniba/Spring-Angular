import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule,FormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../data_service/employee.service';
import { CommonModule } from '@angular/common';
import { Employee } from '../data_service/employee';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  
  updateForm!: FormGroup;
  id!:number;
  errorMessage: string = '';

  

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,) { }
  
    ngOnInit() {
      this.route.params.subscribe(params => {
        this.id = params['id'];
        this.loadEmployee();
        this.createForm();
      });
    }

    createForm() {
      this.updateForm = this.fb.group({
        id: [{ value: '', disabled: true }, Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
      });
    }

    loadEmployee() {
      this.employeeService.getEmployeeById(this.id).subscribe(
        data => {
          this.updateForm.patchValue(data);
        },
        error => console.error('Error loading employee', error)
      );
    }
    updateEmployee() {
      if (this.updateForm.valid) {
        const employeeData = this.updateForm.value;
        this.employeeService.updateEmployee(this.id, employeeData).subscribe(
          data => {
            alert('Employee updated successfully');
            this.router.navigate(['/employees']);
          },
          error => {
            console.error('Error updating employee', error);
            this.errorMessage = 'Failed to update employee data';
          }
        );
      } else {
        this.errorMessage = 'Please fill out all required fields';
      }
    }
  
  }

