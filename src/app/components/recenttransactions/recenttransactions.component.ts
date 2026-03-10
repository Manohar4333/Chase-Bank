import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-recenttransactions',
  templateUrl: './recenttransactions.component.html',
  styleUrl: './recenttransactions.component.css'
})
export class RecenttransactionsComponent {
  user:any;userid:any;spendings:any;earnings:any;
  constructor(private router:Router, private service:CustomersService){}
  ngOnInit(){
    if(localStorage.getItem('loginuser')==null)
    {
      this.router.navigateByUrl('/login');
    }
    else{
      this.user = JSON.parse(localStorage.getItem('loginuser')||'{}');
      this.userid = this.user.id;
    }

    this.service.getSpendings(this.userid).subscribe((res:any)=>{
      this.spendings = res;
    })

    this.service.getEarnings(this.userid).subscribe((res:any)=>{
      this.earnings = res;
    })


  }



}
