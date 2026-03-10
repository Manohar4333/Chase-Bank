import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-finddetails',
  templateUrl: './finddetails.component.html',
  styleUrl: './finddetails.component.css'
})
export class FinddetailsComponent {
  username:any;user:any;
  constructor(private service:LoginService){}

    getDetails(){
      this.service.getCustomerbyName(this.username).subscribe((res:any)=>{
        this.user = res[0];
        console.log(this.user)
    }
  )}
}
