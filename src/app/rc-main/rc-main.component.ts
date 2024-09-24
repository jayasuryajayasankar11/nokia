import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-rc-main',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './rc-main.component.html',
  styleUrls: ['./rc-main.component.css']
})
export class RcMainComponent {
  materialForm: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.materialForm = this.fb.group({
      partCode: ['', Validators.required],
      description: ['', Validators.required],
      umo: ['', Validators.required],
      activity: ['', Validators.required],
      Componentusage: ['', Validators.required],
      types: ['', Validators.required],
      rohsStatus: ['', Validators.required],
      leadTime: ['', Validators.required],
      msdStatus: ['', Validators.required],
      bg: ['', Validators.required],
      productGroup: ['', Validators.required],
      productFamily: ['', Validators.required],
      thLimit: ['', Validators.required],
      productName: ['', Validators.required],
      location: ['', Validators.required],
      compatibility: ['', Validators.required],
      unitPrice: ['', Validators.required]
    });
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      alert('File selected: ' + this.selectedFile.name); 
    }
  }

  onSave() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      this.http.post('/api/product/uploadFile', formData)
        .pipe(catchError(error => {
          console.error('File upload error:', error);
          return of(null);
        }))
        .subscribe(response => {
          console.log('File upload successful:', response);
          alert('File uploaded successfully!');

          this.selectedFile = null;
        });
    } else {
      alert('No file selected.'); 
    }
  }

  onSubmit() {
    if (this.materialForm.valid) {
      this.http.post('/api/product/uploadData', this.materialForm.value)
        .pipe(catchError(error => {
          console.error('Form submission error:', error);
          return of(null);
        }))
        .subscribe(response => {
          console.log('Form data submitted successfully:', response);
          alert('Form submitted successfully!'); 

          this.materialForm.reset(); 
        });
    } else {
      alert('Form is invalid. Please fill in all required fields.'); 
    }
  }

  clearform() {
    this.materialForm.reset();
    this.selectedFile = null; 
  }

  onClear() {
  
    this.selectedFile = null;
  
    // Clear the file input element by setting its value to an empty string
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = ''; // Reset the input file element
    }
  
    alert('File selection has been cleared.');
  }
}
