import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  private toastSubject = new Subject<any>();
  private defaultDuration = 5000;
  
  toastState = this.toastSubject.asObservable();

  constructor() { }

  success(message: string, options: { duration?: number } = {}) {
    const duration = options.duration ?? this.defaultDuration;
    this.toastSubject.next({ type: 'success', summary: 'Sucesso', message, duration });
  }
  warning(message: string, options: { duration?: number } = {}) {
    const duration = options.duration || this.defaultDuration;
    this.toastSubject.next({ type: 'warning', summary: 'Aviso', message, duration });
  }

  info(message: string, options: { duration?: number } = {}) {
    const duration = options.duration || this.defaultDuration;
    this.toastSubject.next({ type: 'info', summary: 'Informação', message, duration  });
  }

  error(message: string, options: { duration?: number } = {}) {
    const duration = options.duration || this.defaultDuration;
    this.toastSubject.next({ type: 'error', summary: 'Erro', message, duration  });
  }
}
