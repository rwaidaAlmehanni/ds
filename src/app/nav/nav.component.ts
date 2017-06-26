import { Component, OnInit ,ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    public userAccessTest:any;
           flage=true;
  constructor(private router: Router, private auth : AuthService){ }

  ngOnInit() {
  }

  callSignup(){//Apply function..

    this.flage=false;
    this.router.navigate(['/signup']);
  }//end callSignup function...
 
  testUser(){//test if the user is logged in
 
      if(localStorage.getItem('id_token')!==null){
        return true
      }
      else{
        return false
      }
   }//end testUser function

   logOut(){ //log out function

      this.flage=true;
      this.auth.logout();
      this.router.navigate(['/login']);
   }//end logOut function
 
}
