import { ApplicationConfig, NgModule, importProvidersFrom } from '@angular/core';
import { Routes, provideRouter, withViewTransitions } from '@angular/router';
import {firebaseConfig } from '../app/core/Services/services'
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';
import { getAuth, provideAuth,AuthModule} from '@angular/fire/auth';
import { getFirestore, provideFirestore,FirestoreModule} from '@angular/fire/firestore';
import { getDatabase, provideDatabase , DatabaseModule} from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

NgModule({
  imports:[FormsModule]
})
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
      provideAuth(() => getAuth()),
      provideFirestore(() => getFirestore()),
      provideStorage(() => getStorage())
    ]),
  ],
};