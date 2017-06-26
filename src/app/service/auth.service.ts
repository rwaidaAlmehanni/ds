import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class AuthService {
  
  constructor(private http : Http ) { }

    login(user) { //http request when the user log in ...

      let headers = new Headers();
      headers.append('Content-Type','application/json'); //add the type of data to the header...
      return this.http.post('api/login', user, {headers: headers})
      .map(res => res.json());

     }//end of login function

    signup(user) { // http request when the user sign up ...

      let headers = new Headers();
      headers.append('Content-Type' , 'application/json'); 
      return this.http.post('api/signup', user , {headers:headers})
      .map(res => res.json());

     }//end of signup function

    storeInLocalStorage(token,id,username){ //function to store data in the localStorage ...
      
      localStorage.setItem('id_token', token); //store the user token in the localStorage ... 
      localStorage.setItem('user-id', id); //store the user _id in the localStorage ... 
      localStorage.setItem('user_name',username);
      
    }//end of storeInLocalStorage function

    logout(){//logout function

      localStorage.clear();
      console.log('Logged out!');

    }//end of logout function
 
    getAllTests(){//function get all the tests in DB..

      let headers = new Headers();
      headers.append('Content-Type' , 'application/json'); 
      return this.http.get('api/getAll')
       .map(res => res.json());

    }//end of getAllTests

    addTestR(test) { // http request to add new test ...

      test.username=localStorage.getItem('user_name');
      let headers = new Headers();
      headers.append('Content-Type' , 'application/json'); 
      return this.http.post('api/addtest', test )
       .map(res => res.json());
    }//end of addTestR function

}//end of the class
