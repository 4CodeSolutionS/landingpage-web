import { Component, EventEmitter, inject, Output, Renderer2 } from '@angular/core';

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
  @Output() aboutClick = new EventEmitter<void>(); 

  phone = '5511964509974';

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

  getWhatsappLink(phone?: string | null){
    if(phone){
      const formattedPhone = phone.replace(/\D/g, ''); // Remove qualquer caractere não numérico
      const message = encodeURIComponent(`Olá! Preciso de ajuda com informações. Poderia me ajudar?`);
      return `https://wa.me/${formattedPhone}?text=${message}`;
    }
    return null
  }

  onAboutClick(): void {
    console.log('About clicked');
    this.scrollDown(200);  
    this.aboutClick.emit(); 
  }
  

  onServicesClick(): void {
    this.servicesClick.emit(); 
  }

  scrollDown(offset: number): void {
    window.scrollBy({
      top: offset, // Deslocamento vertical
      behavior: 'smooth' // Efeito suave
    });
  }
}
