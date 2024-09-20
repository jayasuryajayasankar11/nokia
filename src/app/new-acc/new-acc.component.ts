import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-new-acc',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-acc.component.html',
  styleUrl: './new-acc.component.css'
})
export class NewAccComponent {


  createAccountForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createAccountForm = this.fb.group({
      userId: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  onCreateAccountSubmit() {
    if (this.createAccountForm.valid) {
      const { userId, email, password, confirmPassword } = this.createAccountForm.value;

      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      console.log('Account created for', userId);
      alert('Account created successfully');
      // Implement service to handle account creation here
    } else {
      alert('All fields are required and must be valid');
    }
  }
}
