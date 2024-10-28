import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
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
  isDarkMode = false;
  
  private router = inject(Router);
  private renderer = inject(Renderer2);

  ngOnInit(): void {
    // Verifica o tema salvo no localStorage e aplica o tema correspondente
    this.isDarkMode = localStorage.getItem('theme') === 'dark';
    this.updateTheme();
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

  //CONFIG DARK THEME

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.updateTheme();
  }

  private updateTheme(): void {
    if (this.isDarkMode) {
      this.renderer.addClass(document.documentElement, 'dark');
    } else {
      this.renderer.removeClass(document.documentElement, 'dark');
    }
  }

}
