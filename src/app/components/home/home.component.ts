import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  stats:any;
  constructor(private service:LoginService){}

  ngOnInit(){
    this.service.getStats().subscribe((res)=>{
        this.stats=res;
    })
  }
  
}
