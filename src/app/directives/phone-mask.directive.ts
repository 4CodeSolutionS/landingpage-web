import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhoneMask]'
})
export class PhoneMaskDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInputChange(event: any) {
    const input = event.target;
    let trimmed = input.value.replace(/\D/g, ''); // Remove tudo que não é dígito

    // Aplica a lógica de formatação do telefone
    if (trimmed.length > 10) {
      trimmed = trimmed.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (trimmed.length > 5) {
      trimmed = trimmed.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    } else if (trimmed.length > 2) {
      trimmed = trimmed.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
    } else if (trimmed.length > 0) {
      trimmed = trimmed.replace(/^(\d*)/, '($1');
    }

    input.value = trimmed;
  }
}
