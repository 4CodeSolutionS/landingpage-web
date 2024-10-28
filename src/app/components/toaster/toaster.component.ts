import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ToasterService } from '@/app/service/toaster.service';

@Component({
  selector: 'app-toaster',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit, OnDestroy {
  toast: any;
  private toastSubscription: Subscription = new Subscription();
  private toasterService = inject(ToasterService);

  topOffset: string = '4.2rem'; // Offset inicial do topo
  defaultDuration: number = 5000; // Tempo padrão de exibição (10 segundos)
  private toastTimeout: any; // Armazena o timeout para poder limpá-lo

  ngOnInit() {
    this.toastSubscription = this.toasterService.toastState.subscribe((toast) => {
      if (toast) {
        this.toast = toast;
        const duration = toast.duration ?? this.defaultDuration;
        // Limpa o timeout anterior, se existir
        if (this.toastTimeout) {
          clearTimeout(this.toastTimeout);
        }

        this.toastTimeout = setTimeout(() => {
          this.dismissToast();
        }, duration);
      }
    });
  }

  dismissToast() {
    this.toast = null;
  }

  ngOnDestroy() {
    this.toastSubscription.unsubscribe();
    // Limpa o timeout ao destruir o componente
    if (this.toastTimeout) {
      clearTimeout(this.toastTimeout);
    }
  }
}
