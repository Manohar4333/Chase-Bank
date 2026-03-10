import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-manageemployee',
  templateUrl: './manageemployee.component.html',
  styleUrl: './manageemployee.component.css'
})
export class ManageemployeeComponent {
  constructor(private http:HttpClient,private service:EmployeeService){}
  employees:any;
  ngOnInit(){
    this.service.getEmployees().subscribe(res=>{
      this.employees=res
    })
  }

}
