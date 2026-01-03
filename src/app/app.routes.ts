import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Detalles } from './detalles/detalles';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'details/:id', component: Detalles }
]; 
