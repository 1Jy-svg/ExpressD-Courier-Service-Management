import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidepaneComponent } from './sidepane/sidepane.component';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FormsModule,LoginComponent,CommonModule,HomeComponent,NavbarComponent,SidepaneComponent]
})

export class AppComponent  {
  title = 'Courier Service Management';
  constructor(private firestore:Firestore){}
  /*public ngOnInit(): void {
    const testCollection = collection(this.firestore,'users');
    addDoc(testCollection,{text:"I love firestore database"});
  }*/

}
