import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-forgodpass',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forgodpass.component.html',
  styleUrl: './forgodpass.component.css'
})
export class ForgodpassComponent {

  forgotPasswordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onForgotPasswordSubmit() {
    if (this.forgotPasswordForm.valid) {
      const email = this.forgotPasswordForm.get('email')?.value;
      console.log('Password reset link sent to', email);
      alert('Password reset link has been sent to your email');
      // Implement service to handle password reset here
    } else {
      alert('Please enter a valid email');
    }
  }
}



