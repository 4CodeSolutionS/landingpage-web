import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { EcommerceDetailsComponent } from './views/ecommerce-details/ecommerce-details.component';

export const routes: Routes = [
    { 
      path: '', 
      component: HomeComponent, 
      data: { 
        title: 'Página Inicial', 
        description: 'Crie sua loja online completa com nossos serviços personalizados.', 
        keywords: 'loja online, criar loja virtual, e-commerce, plataforma de vendas'
      } 
    },
    { 
      path: 'ecommerce-details', 
      component: EcommerceDetailsComponent, 
      data: { 
        title: '3-Commerce', 
        description: 'Saiba mais sobre o 3-Commerce, a solução perfeita para seu e-commerce.', 
        keywords: '3-Commerce, detalhes do e-commerce, criar e-commerce, vendas online'
      } 
    }
  ];
  