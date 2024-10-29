import { ThemeService } from '@/app/service/theme.service';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() contactClick = new EventEmitter();
  @Output() homeClick = new EventEmitter();
  @Output() aboutClick = new EventEmitter();
  @Output() servicesClick = new EventEmitter();
  @Output() productsClick = new EventEmitter();

  logo4 = 'assets/img/logo.png';
  logoImage2 = 'assets/img/logoCompleto.png';
  
  mobileMenuOpen = false;
  
  private themeService = inject(ThemeService);

  get isDarkMode() {
    return this.themeService.isDarkMode(); // Observa mudanças no tema
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

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

  onProductsClick(): void {
    console.log('Products clicked');
    this.productsClick.emit();
  }

  toggleNavbar(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

}
