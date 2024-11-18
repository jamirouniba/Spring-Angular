import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { FormControl, FormGroup,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginRequest } from '../../auth/models/login-request';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private auth: AuthService){}

  userForm : FormGroup = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
  })

  request : LoginRequest = new LoginRequest;

  login(){
    const formValue = this.userForm.value;
    if (formValue.username == ""|| formValue.password == "" ){
      alert("Wrong Credentials");
      return;
    }

    this.request.username = formValue.username;
    this.request.password = formValue.password;

    this.auth.doLogin(this.request).subscribe({
      next:(res) =>{
        console.log("Received Response: "+ res.token);
      },error:(err) =>{
        console.log("Error Received: "+ err)
      }
    });




  }

}
