import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { HomeComponent } from './components/home/home.component';
import { CreatecustomerComponent } from './components/createcustomer/createcustomer.component';
import { ViewecustomerComponent } from './components/viewecustomer/viewecustomer.component';
import { ManagecustomerComponent } from './components/managecustomer/managecustomer.component';
import { ViewemployeeComponent } from './components/viewemployee/viewemployee.component';
import { CreateemployeeComponent } from './components/createemployee/createemployee.component';
import { ManageemployeeComponent } from './components/manageemployee/manageemployee.component';
import { ViewbranchComponent } from './components/viewbranch/viewbranch.component';
import { CreatebranchComponent } from './components/createbranch/createbranch.component';
import { ManagebramchComponent } from './components/managebramch/managebramch.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { UsertransferComponent } from './components/usertransfer/usertransfer.component';
import { RecenttransactionsComponent } from './components/recenttransactions/recenttransactions.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { FinddetailsComponent } from './components/finddetails/finddetails.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'admin',component:AdmindashboardComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'createcustomer',component:CreatecustomerComponent},
      {path:'viewcustomer',component:ViewecustomerComponent},
      {path:'managecustomer',component:ManagecustomerComponent},
      {path:'viewemployee',component:ViewemployeeComponent},
      {path:'createemployee',component:CreateemployeeComponent},
      {path:'manageemployee',component:ManageemployeeComponent},
      {path:'viewbranch',component:ViewbranchComponent},
      {path:'createbranch',component:CreatebranchComponent},
      {path:'managebranch',component:ManagebramchComponent}
    ]
  },
  {path:'user',component:UserdashboardComponent,
    children:[
      {path:'uhome',component:UserhomeComponent},
      {path:'transfer',component:UsertransferComponent},
      {path:'transactions',component:RecenttransactionsComponent},
      {path:'profile',component:ProfileComponent},
      {path:'reciever',component:FinddetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
