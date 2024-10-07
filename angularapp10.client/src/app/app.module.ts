import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ServicesComponent } from './services/services.component';
import { SubServicesComponent } from './sub-services/sub-services.component';
import { RouterModule } from '@angular/router';
import { NavBar29Component } from './batool29/nav-bar29/nav-bar29.component';
import { Services29Component } from './batool29/services29/services29.component';
import { NavBarHosamComponent } from './hosam/nav-bar-hosam/nav-bar-hosam.component';
import { ServiceHosamComponent } from './hosam/service-hosam/service-hosam.component';
import { SubservicesHosamComponent } from './hosam/subservices-hosam/subservices-hosam.component';
import { Subscription29Component } from './batool29/subscription29/subscription29.component';
import { LectureComponent } from './hosam/lecture/lecture.component';
import { Lecture2Component } from './hosam/lecture2/lecture2.component';
import { SubscriptionHosamComponent } from './hosam/subscription-hosam/subscription-hosam.component';
import { RegistrationUserComponent } from './hosam/registration-user/registration-user.component';
import { DashboardComponent } from './hosam/hosamAdmin/dashboard/dashboard.component';
import { AddServiceHosamComponent } from './hosam/hosamAdmin/add-service-hosam/add-service-hosam.component';
import { GetServicesAdminComponent } from './hosam/hosamAdmin/get-services-admin/get-services-admin.component';
import { UpdateServiceAdminComponent } from './hosam/hosamAdmin/update-service-admin/update-service-admin.component';
import { LoginHosamComponent } from './hosam/login-hosam/login-hosam.component';
import { ProductsHosamComponent } from './hosam/products-hosam/products-hosam.component';
import { CartRahafComponent } from './hosam/cart-rahaf/cart-rahaf.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ServicesComponent,
    SubServicesComponent,
    NavBar29Component,
    Services29Component,
    NavBarHosamComponent,
    ServiceHosamComponent,
    SubservicesHosamComponent,
    Subscription29Component,
    LectureComponent,
    Lecture2Component,
    SubscriptionHosamComponent,
    RegistrationUserComponent,
    DashboardComponent,
    AddServiceHosamComponent,
    GetServicesAdminComponent,
    UpdateServiceAdminComponent,
    LoginHosamComponent,
    ProductsHosamComponent,
    CartRahafComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },//default path 
      { path: "services", component: ServicesComponent },
      { path: "subservices/:id", component: SubServicesComponent },
      {path:"subscription29" , component : Subscription29Component},




      { path: "services29", component: Services29Component },
      { path: "hosamService", component: ServiceHosamComponent },
      { path: "hosamSubServicesByServiceId/:id", component: SubservicesHosamComponent },
      { path: "lecture2", component: Lecture2Component },
      { path: "subscription", component: SubscriptionHosamComponent },
      { path: "registration", component: RegistrationUserComponent },
      { path: "login", component: LoginHosamComponent },
      { path: "products", component: ProductsHosamComponent },
      { path: "cartRahaf", component: CartRahafComponent },
       {
        path: "dashboard", component: DashboardComponent, children: [

          { path: "addService", component: AddServiceHosamComponent },
          { path: "getServicesOfAdmin", component: GetServicesAdminComponent },
          {path : "updateServiceAdmin/:id" , component : UpdateServiceAdminComponent}


      ] }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
