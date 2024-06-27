import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

constructor(private router:Router){}

  onSubmit(contactForm: any) {
    if (contactForm.valid) {
      console.log(contactForm.value);
      alert('Successfully Contacts form')
      this.router.navigateByUrl('/dashboard')

    } else {
      console.error('Form is invalid');
    }
  }
}
