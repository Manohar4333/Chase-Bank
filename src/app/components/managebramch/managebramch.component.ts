import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-managebramch',
  templateUrl: './managebramch.component.html',
  styleUrl: './managebramch.component.css'
})
export class ManagebramchComponent {
  branches:any;
  constructor(private route:Router,private service:CustomersService){}
  ngOnInit(){
    this.service.getBranches().subscribe((res)=>{
      this.branches=res;
    })
  }
}
