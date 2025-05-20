import { Routes } from '@angular/router';
import { ProfileComponent } from './resume/profile/profile.component';
import { CountdownComponent } from './not-ready/countdown/countdown.component';

export const routes: Routes = [
  { path: '', component: ProfileComponent }, 
  { path: 'articles', component: CountdownComponent }, 
  { path: 'projects', component: CountdownComponent }, 
  { path: 'demos', component: CountdownComponent }, 
  { path: 'contact', component: CountdownComponent }
];
