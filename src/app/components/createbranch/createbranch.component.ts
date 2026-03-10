import { Component } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createbranch',
  templateUrl: './createbranch.component.html',
  styleUrl: './createbranch.component.css'
})
export class CreatebranchComponent {
  constructor(private service:CustomersService,private route:Router){}
  branches:any
  bName:any;
  ifsc:any;
  bmanager:any;
  bcontact:any;
  baddress:any;newbranch:any;
  ngOnInit(){
    this.service.getBranches().subscribe((res)=>{
      this.branches=res;
    })
  }
  addbranch(){
    this.newbranch = {
      "branchName":this.bName,
      "ifscCode":this.ifsc,
      "branchManager":this.bmanager,
      "contactDetails":this.bcontact,
      "address":this.baddress
    }
    this.service.addbranch(this.newbranch).subscribe((res)=>{
      alert("Branch added successfully");
      this.ngOnInit();
      this.route.navigateByUrl("/admin/managebranch")
    })
  }
}
