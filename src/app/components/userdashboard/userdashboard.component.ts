import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from '../../services/customers.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {
  spendingstotal=0;len=0;
user:any;userid:any;spendings:any;earnings:any;
@ViewChild('sidebar') sidebar: ElementRef | undefined;
isSidebarActive: boolean = false;
constructor(private router:Router, private service:CustomersService,private lservice:LoginService){}
ngOnInit(){
  if(localStorage.getItem('loginuser')==null)
  {
    this.router.navigateByUrl('/login');
  }
  else{
    this.user = JSON.parse(localStorage.getItem('loginuser')||'{}');
    this.userid = this.user.id;
  }
  this.lservice.getUsers(this.userid).subscribe((res:any)=>{ 
    this.user = res;
  })
  this.service.getSpendings(this.userid).subscribe((res:any)=>{
    this.spendings = res;
    this.spendings.forEach((element:any) => {
      this.spendingstotal=this.spendingstotal+element.amount;
    });
    console.log(this.spendingstotal)
    this.len += this.spendings.length;
  })

  this.service.getEarnings(this.userid).subscribe((res:any)=>{
    this.earnings = res;
    this.len += this.earnings.length;
  })

}
finalcalc(){
  console.log("called")
  this.spendingstotal=0;
  console.log(this.spendings)
}
logout(){
  localStorage.removeItem('user')
  this.router.navigateByUrl('/')
}
toggleSidebar(): void {
  console.log(this.sidebar)
  if (this.sidebar) {
    this.isSidebarActive = !this.isSidebarActive;
    if (this.isSidebarActive) {
      this.sidebar.nativeElement.classList.add('active');
    } else {
      this.sidebar.nativeElement.classList.remove('active');
    }
  }
}
}
