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
  addNewTest(){

  	 const test = {
      title: this.title,
      status: this.status,
      assigned: this.assigned  
        }
        //console.log(test)
         this.authService.addTestR(test).subscribe(data => {
      if(data){ 
       // console.log("data",data);
        this.router.navigate(['/test']);
      }else {
        console.log("Title is used befor !!");
       	this.router.navigate(['/addtest']);
        
      }
    });
  }
  cancel(){
  	this.router.navigate(['/test']);
  }

}
