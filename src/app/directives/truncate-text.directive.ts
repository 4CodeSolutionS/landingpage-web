import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appTruncateText]',
  standalone: true,
})
export class TruncateTextDirective implements AfterViewInit {
  @Input('appTruncateText') maxLength: number = 100; // Tamanho maximo
  @Input('truncateSuffix') suffix: string = '...'; // Sufixo padrão

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.updateText();
  }

  private updateText(): void {
    const element = this.el.nativeElement;
    const text = element.textContent?.trim() || '';


    // Truncate text if it exceeds the maxLength
    if (text.length > this.maxLength) {
      const truncatedText = text.substring(0, this.maxLength - this.suffix.length) + this.suffix;
      element.textContent = truncatedText;
    } else {
      element.textContent = text;
    }
  }
}
