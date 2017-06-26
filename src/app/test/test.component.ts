import { Component, OnInit } from '@angular/core';
//import {Popup} from 'ng2-opd-popup';
import { AuthService } from '../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  // @ViewChild('popup1') popup1: Popup;
   allTests :Object[] = [];
  constructor( private router: Router, private authService: AuthService ) {
  	
  }

  ngOnInit() {
      this.authService.getAllTests().subscribe(data => {
        
        for(var i=0;i<data.length;i++){
          for(var j=0;j<data[i].test.length;j++){
            this.allTests.push(data[i].test[j]);
          }  
        }
        console.log(this.allTests)
      
    })
  }
  newTest(){
    
    this.router.navigate(['/addtest']);
  }
  
 

}
