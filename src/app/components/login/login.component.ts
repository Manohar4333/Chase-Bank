import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  useremail: any;
  password: any;
  user: any;
  userinfo: any;
  data: any;
  loginuser: any;

  constructor(private myrouter: Router, private db: LoginService) {}

  onLogin() {
    this.user = {
      email: this.useremail,
      password: this.password
    };
    console.log(this.user);

    this.db.login(this.user).subscribe(
      (res) => {
        this.data = res;

        if (this.data.message === 'Login successful') {
          if (this.data.role === 'customer') {
            this.myrouter.navigateByUrl('/user/profile');
            this.loginuser = {
              username: this.data.customerName,
              id: this.data.customerId
            };
            localStorage.setItem('loginuser', JSON.stringify(this.loginuser));
          } else if (this.data.role === 'employee') {
            this.myrouter.navigateByUrl('/admin/home');
            this.user = {
              username: this.data.employeeName,
              id: this.data.employeeId
            };
            localStorage.setItem('loginuser', JSON.stringify(this.user));
          }
        }

        console.log('User Info:', JSON.stringify(res));
        this.userinfo = res;
      },
      (error) => {
        console.error('Login error:', error);
      }
    );
  }

}
