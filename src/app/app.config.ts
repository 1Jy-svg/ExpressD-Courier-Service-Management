import { ApplicationConfig, NgModule, importProvidersFrom } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';
import {firebaseConfig } from '../app/core/Services/services'
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';
import { getAuth, provideAuth,AuthModule} from '@angular/fire/auth';
import { getFirestore, provideFirestore,FirestoreModule} from '@angular/fire/firestore';
import { getDatabase, provideDatabase , DatabaseModule} from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { FormsModule } from '@angular/forms';


NgModule({
  imports:[FormsModule]
})
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    importProvidersFrom([
      provideFirebaseApp(()=>initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore()),
      provideAuth(() => getAuth()),
      provideDatabase(() => getDatabase()),
      provideStorage(() => getStorage()),
     /* ("projectId":"courier-service-manageme-891b4","appId":"1:43330734839:web:91a9b2b74937da09cf21f2","storageBucket":"courier-service-manageme-891b4.appspot.com","apiKey":"AIzaSyBOFkqgnDaH29KofCHjup3iWYVJRIzzsZQ","authDomain":"courier-service-manageme-891b4.firebaseapp.com","messagingSenderId":"43330734839"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase())), importProvidersFrom(provideStorage(() => getStorage()))]
     */ 
      ]),]
  };
