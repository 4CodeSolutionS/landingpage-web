import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Output() servicesClick = new EventEmitter();

  //animação digitação
  ngAfterViewInit() {
    this.startTypingAnimation();
  }

  startTypingAnimation() {
    const typingText = document.getElementById('typingText');

    if (typingText) {
      typingText.classList.remove('reanimate');  // Inicia a animação de digitação

      setTimeout(() => {
        // Após 4 segundos (tempo de digitação), faz o cursor piscar por 1 minuto
        typingText.classList.add('reanimate');   // Mantém o texto e o cursor piscando
        setTimeout(() => {
          typingText.classList.remove('reanimate'); // Reinicia a animação de digitação após 1 minuto
          this.startTypingAnimation();
        }, 60000); // 60000ms = 1 minuto
      }, 5000); // Tempo total da animação (4s + 1s de delay para o cursor)
    }
  }

  onServicesClick(): void {
    console.log('Services clicked');
    this.servicesClick.emit();
  }

}
