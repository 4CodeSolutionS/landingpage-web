import { environment } from "@/env/environment";
import { Contact } from "@/models/contact";
import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  url = `${environment.URL_API}/contacts`;

  private http = inject(HttpClient);

  sendEmailToContact(contact: Contact): Observable<{ message: string }> {
      return this.http.post<{ message: string }>(this.url, contact);
  }
}
