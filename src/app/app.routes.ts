import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SidepaneComponent } from './sidepane/sidepane.component';
import { DashboardComponent } from './dashboard/dashboard.component';
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'sidepane', component: SidepaneComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent }
];
