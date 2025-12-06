import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss'],
})
export class GetStartedComponent {
  contactForm: FormGroup;
  isLoading = false;
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]{10}$/), // exactly 10 digits
        ],
      ],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  // onSubmit(): void {
  //   this.sendEmail();
  //   if (this.contactForm.valid) {
  //     console.log('Form Submitted!', this.contactForm.value);
  //     // Here you would typically send the form data to a server
  //   } else {
  //     this.contactForm.markAllAsTouched();
  //     console.log('Form is invalid. Please check the fields.');
  //   }
  // }
  onSubmit(): void {
    if (this.contactForm.valid) {
      this.sendEmail();
      console.log('Form Submitted!', this.contactForm.value);
    } else {
      this.contactForm.markAllAsTouched();
      console.log('Form is invalid. Please check the fields.');
    }
  }

  // formData = {
  //   name:
  //     this.contactForm.value.firstName + ' ' + this.contactForm.value.lastName,
  //   email: 'tejas.jagtap16@gmail.com',
  //   message: 'Hi, Testing email configuration!!!',
  //   // time: Date.now(),
  //   contact: '9284006183',
  // };

  sendEmail() {
    this.isLoading = true;
    let data = {
      name:
        this.contactForm.value.firstName +
        ' ' +
        this.contactForm.value.lastName,
      email: this.contactForm.value.email,
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message,
      contact: this.contactForm.value.phone,
      // time: Date.now(),
      // contact: '9284006183',
    };
    emailjs
      .send('service_27vk07y', 'template_o5da6tr', data, 'yGnu426puSOC0Ky3s')
      .then(
        (result) => {
          console.log('Email sent!', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.error('Failed to send email:', error.text);
          alert('Failed to send message.');
          //   }
          // );
        }
      )
      .finally(() => {
        this.isLoading = false;
        this.contactForm.reset();
      });
  }
}
