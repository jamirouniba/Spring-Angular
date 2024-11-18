import { Component, ViewEncapsulation } from '@angular/core';
import { NgFor } from '@angular/common';
import { Employee } from '../data_service/employee';
import { EmployeeService } from '../data_service/employee.service';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent {

  errorMessage: string = '';

  employees : Employee[] | undefined;
  constructor(
    private employeeService : EmployeeService,
    private router:Router,
    private route: ActivatedRoute,
  ){}
  
  ngOnInit():void{
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data=> {
        this.employees = data;
    });
  }

  updateEmployee(id:number) {
    this.router.navigate(['employees/update',id])
    }

  deleteEmployee(id:number) {
      if (confirm('Are you sure you want to delete this employee?')) {
        
        this.employeeService.deleteEmployee(id).subscribe(
          () => {
            this.getEmployees();
          },
          error => {
            console.error('Error deleting employee', error);
            this.errorMessage = 'Failed to delete employee data';
          }
        );
      }
    }
 
  
    


}
