import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCepMask]'
})
export class CepMaskDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInputChange(event: any) {
    const input = event.target;
    const rawValue = input.value;
    let trimmed = rawValue.replace(/\D/g, ''); // Remove tudo que não é dígito

    // Aplica a lógica de formatação do CEP
    if (trimmed.length > 5) {
      trimmed = trimmed.replace(/^(\d{5})(\d{0,3}).*/, '$1-$2');
    }

    if (trimmed !== rawValue) {
      input.value = trimmed;
      this.updateValue(input);
    }
  }

  private updateValue(input: HTMLInputElement): void {
    const event = new Event('input', { bubbles: true });
    input.dispatchEvent(event);
  }
}
