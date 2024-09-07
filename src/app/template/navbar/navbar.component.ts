import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Output() contactClick = new EventEmitter();
  @Output() homeClick = new EventEmitter();
  @Output() aboutClick = new EventEmitter();
  @Output() servicesClick = new EventEmitter();
  @Output() portfolioClick = new EventEmitter();

  logo4 = 'assets/img/logo.png';
  logoImage2 = 'assets/img/logoCompleto.png';
  
  mobileMenuOpen = false;

  private router = inject(Router);

  onContactClick(): void {
    console.log('Contact clicked');
    this.contactClick.emit();
  }

  onHomeClick(): void {
    console.log('Home clicked');
    this.homeClick.emit();
  }

  onAboutClick(): void {
    console.log('About clicked');
    this.aboutClick.emit();
  }

  onServicesClick(): void {
    console.log('Services clicked');
    this.servicesClick.emit();
  }

  onPortfolioClick(): void {
    console.log('Portfolio clicked');
    this.portfolioClick.emit();
  }

  toggleNavbar(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

}
