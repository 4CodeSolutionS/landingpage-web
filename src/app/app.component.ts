import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './template/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { ContactComponent } from './sections/contact/contact.component';
import { ProductsComponent } from './sections/products/products.component';
import { ServicesWorkComponent } from './sections/services-work/services-work.component';
import { AboutComponent } from './sections/about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    ProductsComponent,
    ServicesWorkComponent,
    AboutComponent,
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

  ngOnInit(): void { }
  scrollToContact(): void {
    console.log('Scrolling to contact');
    this.contactSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToHome(): void {
    console.log('Scrolling to home');
    this.homeSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToAbout(): void {
    console.log('Scrolling to about');
    this.aboutSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToProducts(): void {
    console.log('Scrolling to products');
    this.productsSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToServicesWork(): void {
    console.log('Scrolling to services work');
    this.servicesWorkSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
