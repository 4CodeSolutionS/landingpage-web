import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './template/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { ContactComponent } from './sections/contact/contact.component';
import { ProductsComponent } from './sections/products/products.component';
import { ServicesWorkComponent } from './sections/services-work/services-work.component';
import { AboutComponent } from './sections/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './template/footer/footer.component';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    //ProductsComponent,
    ServicesWorkComponent,
    AboutComponent,
    FooterComponent,
    // RouterOutlet,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  @ViewChild('contactSection', { static: true, read: ElementRef }) contactSection!: ElementRef;
  @ViewChild('homeSection', { static: true, read: ElementRef }) homeSection!: ElementRef;
  @ViewChild('aboutSection', { static: true, read: ElementRef }) aboutSection!: ElementRef;
  @ViewChild('productsSection', { static: true, read: ElementRef }) productsSection!: ElementRef;
  @ViewChild('servicesWorkSection', { static: true, read: ElementRef }) servicesWorkSection!: ElementRef;


  private titleService = inject(Title);
  private metaService = inject(Meta);
  private router = inject(Router);
  private route = inject(ActivatedRoute);


  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updatePageMetaData();
      }
    });
  }

  private updatePageMetaData(): void {
    let route = this.route.firstChild;
    while (route?.firstChild) {
      route = route.firstChild;
    }

    const title = route?.snapshot.data['title'] || 'Minha Loja Online';
    const description = this.getMetaDescription(route?.snapshot.routeConfig?.path || '');
    const keywords = this.getMetaKeywords(route?.snapshot.routeConfig?.path || '');

    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'keywords', content: keywords });
  }

  private getMetaDescription(route: string): string {
    switch (route) {
      case '':
        return 'Crie sua loja online completa com nossos serviços personalizados.';
      case 'ecommerce-details':
        return 'Saiba mais sobre o 3-Commerce, a solução perfeita para seu e-commerce.';
      default:
        return 'Minha Loja Online - Soluções personalizadas para seu e-commerce.';
    }
  }

  private getMetaKeywords(route: string): string {
    switch (route) {
      case '':
        return 'loja online, criar loja virtual, e-commerce, plataforma de vendas';
      case 'ecommerce-details':
        return '3-Commerce, detalhes do e-commerce, criar e-commerce, vendas online';
      default:
        return 'e-commerce, loja virtual, criar loja online, vendas na internet';
    }
  }

  scrollToContact(): void {
    this.contactSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToHome(): void {
    this.homeSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToAbout(): void {
    this.aboutSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToProducts(): void {
    this.productsSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToServicesWork(): void {
    this.servicesWorkSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
