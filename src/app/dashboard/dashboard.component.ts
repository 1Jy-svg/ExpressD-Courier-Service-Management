import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { firebaseConfig } from '../core/Services/services';
import { collection, getDocs, getFirestore, query } from 'firebase/firestore';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})


export class DashboardComponent {

  items$: Observable<any[]>;

  constructor() {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    this.items$ = this.fetchPackageData(db);
  }

  // Function to fetch package data
  fetchPackageData(db: any): Observable<any[]> {
    const packageRef = query(collection(db, 'angular17users'));
    return new Observable<any[]>((observer) => {
      getDocs(packageRef).then((querySnapshot) => {
        const items: any[] | undefined = [];
        querySnapshot.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data() });
        });
        observer.next(items);
        observer.complete();
      }).catch((error) => {
        observer.error(error);
      });
    });
  }
}
     
       