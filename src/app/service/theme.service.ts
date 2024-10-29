import { Injectable, inject, signal, WritableSignal } from '@angular/core';
import { Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2 = inject(RendererFactory2).createRenderer(null, null);
  
  // Signal para controlar o estado do tema
  isDarkMode: WritableSignal<boolean> = signal(false);

  constructor() {
    this.initializeTheme(); // Chama a inicialização diretamente ao instanciar o service
  }

  // Inicializa o estado do tema ao carregar o serviço
  private initializeTheme(): void {
    const storedTheme = localStorage.getItem('theme') === 'dark';
    this.isDarkMode.set(storedTheme);
    this.updateTheme(storedTheme);
  }

  toggleTheme(): void {
    const newThemeState = !this.isDarkMode();
    this.isDarkMode.set(newThemeState);
    localStorage.setItem('theme', newThemeState ? 'dark' : 'light');
    this.updateTheme(newThemeState);
  }

  private updateTheme(isDark: boolean): void {
    if (isDark) {
      this.renderer.addClass(document.documentElement, 'dark');
    } else {
      this.renderer.removeClass(document.documentElement, 'dark');
    }
  }
}
