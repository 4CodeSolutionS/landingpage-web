import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appStatusBackground]',
  standalone: true,
})
export class StatusBackgroundDirective implements OnChanges {
  @Input() appStatusBackground: string | undefined | null;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appStatusBackground']) {
      this.updateBackgroundColor();
    }
  }

  private updateBackgroundColor(): void {

    if (!this.appStatusBackground) {
      this.el.nativeElement.style.backgroundColor = '';
      return;
    }

    let backgroundColor: string;

    switch (this.appStatusBackground) {
      case 'REPROVED':
        backgroundColor = 'red';
        break;
      case 'APPROVED':
        backgroundColor = 'green';
        break;
      case 'PENDING':
        backgroundColor = '#facc15';
        break;
      case 'CANCELED':
        backgroundColor = 'red';
        break;
      case 'ANALYSIS':
        backgroundColor = 'orange';
        break;
      case 'ANALYSE_REPROVED':
        backgroundColor = 'darkred';
        break;
      case 'CREATED':
        backgroundColor = '#f87177'; // Exemplo de cor válida em hexadecimal
        break;
      case 'DONE':
        backgroundColor = 'green';
        break;
      case 'SENT':
        backgroundColor = 'orange';
        break;
      case 'REFUNDED':
        backgroundColor = 'gray';
        break;
      case 'PROCESSED':
        backgroundColor = 'yellow';
        break;
      default:
        backgroundColor = 'white';
    }

    this.el.nativeElement.style.backgroundColor = backgroundColor;
  }
}
