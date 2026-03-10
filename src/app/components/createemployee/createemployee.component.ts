import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrl: './createemployee.component.css'
})
export class CreateemployeeComponent {
  constructor(private db: LoginService, private data:CustomersService, private myrouter: Router) { }
  user: any;
  username: any;
  email: any;mobile:any;gender:any;accounttype:any;branch:any;
  availableBalance:any;
  password: any;
  confirmPassword: any;selectedBranchId:any
  branches:any;
  branchNames:any
 
  ngOnInit(){
    this.data.getBranches().subscribe((res)=>{
      this.branches = res;
      console.log(this.branches);

    })
   
  }

  registernow() {
    if (this.password === this.confirmPassword) {
      this.user = {
        "name": this.username,
        "email": this.email,
        "password": this.password,
        "mobile":this.mobile,
        "gender":this.gender,
        "branch":this.selectedBranchId,
        "role":"employee"
      };

      this.db.signup(this.user).subscribe(
        (res: any) => {
          alert(res.message); // Display the message property from the response
          //localStorage.setItem("loginuser", JSON.stringify(this.user));
          // Redirect or perform other actions on successful registration
          this.myrouter.navigateByUrl("/login");
        },
        (error:any) => {
          console.error(error);
          if (error.error && error.error.error) {
            alert(error.error.error); // Display the error message from the response
          } else {
            alert("Error occurred while signing up."); // Display a generic error message
          }
        }
      );
    }
  
}
}
