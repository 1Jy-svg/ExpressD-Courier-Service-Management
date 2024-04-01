import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet,FormsModule,NgClass,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  signupUsers : any[]=[];
  signupObj:any={
    username:'',
    email:'',
    password:''
  };
  loginObj:any={
    email:'',
    password:''
  };
  

  constructor(private router: Router){}
  ngOnInit(): void {
    const localData=localStorage.getItem('signUpUsers');
    if(localData!= null){
      this.signupUsers=JSON.parse(localData);
    }
  }
  onSignup(){
       this.signupUsers.push(this.signupObj);
       localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
       this.signupObj={
        username:'',
        email:'',
        password:''
      };
      this.router.navigate(['/login']);
      
  }
  onlogin(){
      const isUserExist =this.signupUsers.find(m => m.username==this.loginObj.username && 
        m.password==this.loginObj.password);
        if(isUserExist != undefined){
          alert('user Login succesfully');
          this.router.navigate(['/']);
        }
        else{
          alert('Wrong credentials');
        }
  }


}
