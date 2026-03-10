import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { HomeComponent } from './components/home/home.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ViewemployeeComponent } from './components/viewemployee/viewemployee.component';
import { CreateemployeeComponent } from './components/createemployee/createemployee.component';
import { ManageemployeeComponent } from './components/manageemployee/manageemployee.component';
import { ViewbranchComponent } from './components/viewbranch/viewbranch.component';
import { CreatebranchComponent } from './components/createbranch/createbranch.component';
import { ManagebramchComponent } from './components/managebramch/managebramch.component';
import { CreatecustomerComponent } from './components/createcustomer/createcustomer.component';
import { ViewecustomerComponent } from './components/viewecustomer/viewecustomer.component';
import { ManagecustomerComponent } from './components/managecustomer/managecustomer.component';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { UsertransferComponent } from './components/usertransfer/usertransfer.component';
import { RecenttransactionsComponent } from './components/recenttransactions/recenttransactions.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FinddetailsComponent } from './components/finddetails/finddetails.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    HomeComponent,
    CustomerComponent,
    ViewemployeeComponent,
    CreateemployeeComponent,
    ManageemployeeComponent,
    ViewbranchComponent,
    CreatebranchComponent,
    ManagebramchComponent,
    CreatecustomerComponent,
    ViewecustomerComponent,
    ManagecustomerComponent,
    UserhomeComponent,
    UsertransferComponent,
    RecenttransactionsComponent,
    ProfileComponent,
    RegistrationComponent,
    FinddetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
