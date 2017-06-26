import { Component, OnInit , NgZone} from '@angular/core';
import { Http } from "@angular/http";
import {Router} from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username: String;
  email: String;
  password: String;
 
  constructor( private router: Router,
   private authService: AuthService, 
   private _ngZone: NgZone ,
   private http   : Http
  ) {

  }

  ngOnInit() { 
    }

  addNewUser() { // function to add new user to DB ...

    const user = {
       username: this.username,
       email: this.email,
       password: this.password  
  }

    this.authService.signup(user).subscribe(data => {
      if(data){///need to refactor depend on the data from the back end 
        
        this.authService.storeInLocalStorage(data.token, data.id, data.username); // store that data in localStorage ...
        this.router.navigate(['/test']);
      
      }else {
        
        console.log("User already exist !!");
        this.router.navigate(['/signup']);
      }
    });
  }//end of signup function ...
    
}//end of the class ...
