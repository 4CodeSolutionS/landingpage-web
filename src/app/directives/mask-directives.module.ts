import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfCnpjMaskDirective } from './cpf-mask.directive';
import { CepMaskDirective } from './cep-mask.directive';
import { PhoneMaskDirective } from './phone-mask.directive';
import { DateMaskDirective } from './date-mask.directive';

@NgModule({
  declarations: [
    PhoneMaskDirective,
    CpfCnpjMaskDirective,
    CepMaskDirective,
    DateMaskDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PhoneMaskDirective,
    CpfCnpjMaskDirective,
    CepMaskDirective,
    DateMaskDirective
  ]
})
export class MaskDirectivesModule { }
