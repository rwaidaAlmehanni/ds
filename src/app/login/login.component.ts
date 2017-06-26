import { Component, OnInit ,NgZone} from '@angular/core';
import { Http } from "@angular/http";
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username="";
    password="";
  constructor(
    private router: Router,
    private authService: AuthService,
    private _ngZone: NgZone ,
    private http   : Http
    
  ) {}
  
  ngOnInit() {
  }

  submitLogIn() {//function call when user log in..

    const user={
    	username:this.username,
    	password:this.password
    }

    this.authService.login(user).subscribe(data => {
      if(data){ // test if the data from backend that has token ...
         // if the user is not in DB first go to signup page to register ...
        this.authService.storeInLocalStorage(data.token, data.userId, data.username); // store that data in localStorage ...
        this.router.navigate(['/test']);
      }else{
        console.log("User not found !!");
      }
    });
  }//end of submitLogIn function
}


