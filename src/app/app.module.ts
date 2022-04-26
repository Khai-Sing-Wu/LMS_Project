import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/login/login.component';
import { SignUpComponent } from './components/signup/signup.component';
import { OrderComponent } from './components/order/order.component';
import { FormsModule } from '@angular/forms';
import { StatusComponent } from './components/status/status.component';
import { LMSService } from './services/lms.services';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';
import { AdminComponent } from './components/admin/login/admin-login.component';
import { AdminStatusComponent } from './components/admin/status/adminstatus.component';


@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    LogInComponent, 
    StatusComponent,
    SignUpComponent,
    StatusComponent, 
    OrderComponent,   
    AdminComponent,
    AdminStatusComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    RouterModule.forRoot([
      {path: "", component: HomeComponent, children : [
          { path : 'login', component : LogInComponent},
          { path : 'signup', component : SignUpComponent},
          { path: 'admin', component: AdminComponent}
      ]},
      { path : 'order', component : OrderComponent},
      { path : 'status', component : StatusComponent},
      { path : 'adminstatus', component : AdminStatusComponent}
    ])
  ],
  providers: [LMSService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
