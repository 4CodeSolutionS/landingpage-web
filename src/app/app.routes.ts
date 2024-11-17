import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { EcommerceDetailsComponent } from './views/ecommerce-details/ecommerce-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, data: { title: 'Página Inicial' } },
    { path: 'ecommerce-details', component: EcommerceDetailsComponent, data: { title: '3-Commerce' } }
];
