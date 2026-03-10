import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-viewecustomer',
  templateUrl: './viewecustomer.component.html',
  styleUrl: './viewecustomer.component.css'
})
export class ViewecustomerComponent {
  constructor(private route:Router, private service:CustomersService){}
  getuser(){
   
  }
}
