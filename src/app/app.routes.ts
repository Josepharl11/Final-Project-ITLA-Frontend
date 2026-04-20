import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { MapComponent } from './map-component/map-component';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'map', component: MapComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
