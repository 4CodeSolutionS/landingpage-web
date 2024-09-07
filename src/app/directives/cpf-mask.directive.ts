import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCpfCnpjMask]'
})
export class CpfCnpjMaskDirective {
  private readonly MAX_CNPJ_LENGTH = 14; // Máximo de caracteres para CNPJ

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInputChange(event: any) {
    const input = event.target;
    let trimmed = input.value.replace(/\D/g, ''); // Remove tudo que não é dígito

    // Limita o comprimento do valor para o máximo de caracteres do CNPJ
    if (trimmed.length > this.MAX_CNPJ_LENGTH) {
      trimmed = trimmed.substring(0, this.MAX_CNPJ_LENGTH);
    }

    // Verifica se é CPF ou CNPJ com base no comprimento
    if (trimmed.length > 11) {
      // Aplica a formatação do CNPJ
      if (trimmed.length > 12) {
        trimmed = trimmed.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}).*/, '$1.$2.$3/$4-$5');
      } else if (trimmed.length > 8) {
        trimmed = trimmed.replace(/^(\d{2})(\d{3})(\d{3})(\d{0,4}).*/, '$1.$2.$3/$4');
      } else if (trimmed.length > 5) {
        trimmed = trimmed.replace(/^(\d{2})(\d{3})(\d{0,3})/, '$1.$2.$3');
      } else if (trimmed.length > 2) {
        trimmed = trimmed.replace(/^(\d{2})(\d{0,3})/, '$1.$2');
      }
    } else {
      // Aplica a formatação do CPF
      if (trimmed.length > 9) {
        trimmed = trimmed.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4');
      } else if (trimmed.length > 6) {
        trimmed = trimmed.replace(/^(\d{3})(\d{3})(\d{0,3}).*/, '$1.$2.$3');
      } else if (trimmed.length > 3) {
        trimmed = trimmed.replace(/^(\d{3})(\d{0,3})/, '$1.$2');
      }
    }

    input.value = trimmed;
  }
}
