import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from '../../services/customers.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usertransfer',
  templateUrl: './usertransfer.component.html',
  styleUrl: './usertransfer.component.css'
})
export class UsertransferComponent {
  recieverId:any;
  amount:any;
  senderId:any;
  password:any;
  user:any
  constructor(private router:Router,private service:CustomersService){}
  ngOnInit(){
    if(localStorage.getItem('loginuser')==null)
    {
      this.router.navigateByUrl('/login');
    }
    else{
      this.user = JSON.parse(localStorage.getItem('loginuser')||'{}');
      this.senderId = this.user.id;
    }
  }

  sendAmount(){
    this.user = {
      "senderId":this.senderId,
      "receiverId":this.recieverId,
      "amount":this.amount,
      "password":this.password
  }
  console.log(this.user);
  this.service.sendAmount(this.user).subscribe((res:any)=>{
    

   
      Swal.fire({
        imageUrl: "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/63919/potted-plant-clipart-md.png",
        imageHeight: 300,
        text: res.message+" Wohoo!.. a plant was planted"
      });
    
    this.router.navigateByUrl('/user/home');
  })
}
}
