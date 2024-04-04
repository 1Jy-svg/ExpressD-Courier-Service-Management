import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidepaneComponent } from './sidepane/sidepane.component';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, getDocs } from 'firebase/firestore';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, FormsModule, LoginComponent, CommonModule, HomeComponent, NavbarComponent, SidepaneComponent]
})

export class AppComponent {
  title = 'firebase-cms';
  data: any;
  constructor(private firestore: Firestore) { }
  ngOnInit() {
    getDocs(collection(this.firestore, "angular17users"))
      .then((response) => {
        response.docs.forEach((doc) => {
          this.data = doc.data();
          console.log(this.data);
          localStorage.setItem('adminStatus', this.data.admin);
        });
      })
      .catch((error) => { console.log(error) });
  }
}
