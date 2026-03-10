import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {
  constructor(private route:Router){}
  @ViewChild('sidebar') sidebar: ElementRef | undefined;
  isSidebarActive: boolean = false;
  checkuser:any;
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
  ngOnInit(){
    if(localStorage.getItem('loginuser')!=null){
      this.checkuser=localStorage.getItem('loginuser')
      this.checkuser=JSON.parse(this.checkuser)
    }
  }
  logout(){
    localStorage.removeItem('user')
    this.route.navigateByUrl('/')
  }
}
