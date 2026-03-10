import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-managecustomer',
  templateUrl: './managecustomer.component.html',
  styleUrl: './managecustomer.component.css'
})
export class ManagecustomerComponent {
  customers:any;
  constructor(private service:CustomersService){}
  ngOnInit(){
    this.service.getCustomers().subscribe((res)=>{
      this.customers=res;
    })
  }
}
