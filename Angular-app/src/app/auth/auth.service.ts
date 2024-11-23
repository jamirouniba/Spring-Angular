import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL = "http://localhost:8080/api/v1/";
  constructor(private http : HttpClient) { }

  signup(signupRequest: any): Observable<any> {
    return this.http.post(this.baseURL + "signup", signupRequest)
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post(this.baseURL + "authenticate", loginRequest)
  }


  hello(): Observable<any> {
    return this.http.get(this.baseURL + 'api/hello', {
      headers: this.createAuthorizationHeader()
    });
  }

  private createAuthorizationHeader() {
    const jwtToken = localStorage.getItem('JWT');
    if (jwtToken) {
      return new HttpHeaders().set(
        'Authorization', 'Bearer ' + jwtToken
      )
    } else {
      console.log("JWT token not found in the Local Storage");
      return;
    }
  }

}
