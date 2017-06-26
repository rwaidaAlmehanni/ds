import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import { LocationStrategy , HashLocationStrategy } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './service/auth.service';
import { TestComponent } from './test/test.component';
import { NavComponent } from './nav/nav.component';
import { AddTestComponent } from './add-test/add-test.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TestComponent,
    NavComponent,
    AddTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
  { path:'',component:LoginComponent},
  { path:'signup',component:SignupComponent},
  { path:'login',component:LoginComponent},
  { path:'test',component:TestComponent},
  { path:'addtest',component:AddTestComponent},
  ])
    ],
  providers: [{provide:LocationStrategy,useClass:HashLocationStrategy},AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
