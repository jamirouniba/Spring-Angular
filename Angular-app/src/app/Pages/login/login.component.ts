import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { FormBuilder, FormControl, FormGroup,FormsModule,ReactiveFormsModule, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule,RouterLinkActive,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private service: AuthService,
    private fb: FormBuilder,
    private router: Router,
){}

  loginForm : FormGroup = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
  })

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    })
  }

  login() {
    console.log(this.loginForm.value);
    this.service.login(this.loginForm.value).subscribe((response) => {
      console.log(response);
      if (response.jwtToken) {
        
        const jwtToken = response.jwtToken;
        localStorage.setItem('JWT', jwtToken);
        this.router.navigate(['dashboard']);
      }
    })
  }



  }


