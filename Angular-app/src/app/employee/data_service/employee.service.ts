import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  

  private baseURL = "http://localhost:8080/api/v1/employees";
  constructor(private HttpClient:HttpClient) { }

  getEmployeesList():Observable<Employee[]>{
    return this.HttpClient.get<Employee[]>(`${this.baseURL}`);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.HttpClient.post<Employee>(`${this.baseURL}/create`, employee);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.HttpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id:number, employee: Employee) : Observable<Employee>{
    return this.HttpClient.post<Employee>(`${this.baseURL}/update/${id}`, employee);
  }

  deleteEmployee(id: any) {
    return this.HttpClient.delete<Employee>(`${this.baseURL}/delete/${id}`);
  }


}
