import { Component } from '@angular/core';
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
export class LoginComponent {
  isSignDivVisiable: boolean  = true;
  signUpObj: SignUpModel  = new SignUpModel();
  loginObj: LoginModel  = new LoginModel();

  constructor(private router: Router){}


  onRegister() {
    debugger;
    const localUser = localStorage.getItem('angular17users');
    if(localUser != null) {
      const users =  JSON.parse(localUser);
      users.push(this.signUpObj);
      localStorage.setItem('angular17users', JSON.stringify(users))
    } else {
      const users = [];
      users.push(this.signUpObj);
      localStorage.setItem('angular17users', JSON.stringify(users))
    }
    
  }

  onLogin() {
    debugger;
    const localUsers =  localStorage.getItem('angular17users');
    if(localUsers != null) {
      const users =  JSON.parse(localUsers);

      const isUserPresent =  users.find( (user:SignUpModel)=> user.email == this.loginObj.email && user.password == this.loginObj.password);
      if(isUserPresent != undefined) {
        localStorage.setItem('loggedUser', JSON.stringify(isUserPresent));
        this.router.navigateByUrl('/dashboard');
      } else {
        alert("No User Found")
      }
    }
  }

}

export class SignUpModel  {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;

  constructor() {
    this.email = "";
    this.name = "";
    this.phone="";
    this.address="";
    this.password= ""
  }
}

export class LoginModel  { 
  email: string;
  password: string;
phone: any;
address: any;

  constructor() {
    this.email = ""; 
    this.password= ""
  }
}
