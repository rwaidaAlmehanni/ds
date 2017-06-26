import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {

	title: String;
    status: String;
    assigned: String;

  constructor( private router: Router , private authService: AuthService ) { }

  ngOnInit() {
  }

  addNewTest(){ // function call when user signup..

  	const test = {

        title: this.title,
        status: this.status,
        assigned: this.assigned

        }

    this.authService.addTestR(test).subscribe(data => {

        if(data){ //when signup done

            this.router.navigate(['/test']);

        }else {//if the signup faild

            console.log("Title is used befor !!");
       	    this.router.navigate(['/addtest']);  
        }
    });
  }//end of addNewTest

  cancel(){//cancel function..

  	this.router.navigate(['/test']);
  }//end of cancel function
  
}
