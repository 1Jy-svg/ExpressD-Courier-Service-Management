import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { AngularFireDatabase ,AngularFireList} from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

export const firebaseConfig = {

    apiKey: "your_apikey",
  
    authDomain: "courier-service-manageme-891b4.firebaseapp.com",
  
    projectId: "courier-service-manageme-891b4",
  
    storageBucket: "courier-service-manageme-891b4.appspot.com",
  
    messagingSenderId: "43330734839",
  
    appId: "1:43330734839:web:91a9b2b74937da09cf21f2"
  
  };
