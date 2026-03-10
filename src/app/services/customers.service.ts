import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http:HttpClient) { }
  // getusers(){
  //   return this.http.get("http://localhost:4300/customer")
  // }
  // adduser(newuser:any):Observable<any>{
  //   return this.http.post("http://localhost:4300/users/registration",newuser)
  // }
  getBranches(){
    return this.http.get('http://localhost:4300/branches',{responseType:'json'});
  }

  sendAmount(user:any){
    return this.http.post('http://localhost:4300/users/transaction',user,({responseType:'json'}));
  }

  getSpendings(userid:any){
    return this.http.get('http://localhost:4300/users/spendings/'+userid,{responseType:'json'});
  }
  getEarnings(userid:any){
    return this.http.get('http://localhost:4300/users/earnings/'+userid,{responseType:'json'});
  }
  addbranch(branch:any){
    return this.http.post('http://localhost:4300/branches',branch,({responseType:'json'}));
  }
  getCustomers(){
    return this.http.get('http://localhost:4300/users/allcustomers',{responseType:'json'});
  }
}
