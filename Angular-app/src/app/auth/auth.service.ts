import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { LoginRequest } from './models/login-request';
import { LoginResponse } from './models/login-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL = "http://localhost:8080/api/v1/login";
  constructor(private http : HttpClient) { }


  doLogin(request: LoginRequest):Observable<LoginResponse>{
    return this.http.post<LoginResponse>(this.baseURL,request)
  }
}
