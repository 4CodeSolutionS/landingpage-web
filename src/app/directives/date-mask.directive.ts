import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDateMask]'
})
export class DateMaskDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInputChange(event: any) {
    const input = event.target;
    let trimmed = input.value.replace(/\D/g, ''); // Remove tudo que não é dígito

    // Aplica a lógica de formatação da data de nascimento
    if (trimmed.length > 2) {
      trimmed = trimmed.replace(/^(\d{2})(\d{0,2})(\d{0,4}).*/, '$1/$2/$3');
    } else if (trimmed.length > 0) {
      trimmed = trimmed.replace(/^(\d{0,2})/, '$1');
    }

    input.value = trimmed;
  }
}
