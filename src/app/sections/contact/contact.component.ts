import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MaskDirectivesModule } from '../../directives/mask-directives.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Contact } from '@/models/contact';
import { ContactService } from '@/app/service/contact.service';
import { ToasterComponent } from '@/app/components/toaster/toaster.component';
import { ToasterService } from '@/app/service/toaster.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MaskDirectivesModule,
    ReactiveFormsModule,
    ToasterComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm!: FormGroup;
  contact: Contact = {} as Contact;
  active: boolean = false;

  private contactService = inject(ContactService);
  private toasterService = inject(ToasterService);

  private formBuilder = inject(FormBuilder);
  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.contact = this.contactForm.value;
      // enviar verificação de emaill
      this.contactService.sendEmailToContact(this.contact).subscribe({
        next: (response: { message: string }) => {
          this.contactForm.reset();
          this.toasterService.success(response.message);
        },
        error: (error) => {
          console.error('Error sending email:', error);
        }
      })
    } else {
      console.log('Form is invalid');
    }
  }
}
