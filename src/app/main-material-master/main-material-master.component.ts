import { Component } from '@angular/core';
import { FormsModule,FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-main-material-master',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './main-material-master.component.html',
  styleUrl: './main-material-master.component.css'
})
export class MainMaterialMasterComponent {

  materialForm : FormGroup;

  constructor(private fb:FormBuilder){
    this.materialForm = this.fb.group({
      partcode:['', Validators.required],
      partdescription:['', Validators.required],
      rohsStatus:['', Validators.required],
      msdStatus:['', Validators.required],
      Technology:['', Validators.required],
      Rack:['', Validators.required],
      Quantity:['', Validators.required],
      unitPrice:['', Validators.required],
      customduty:['', Validators.required],
      catmovement:['', Validators.required]

    })
  }

  onSubmit(){
    if(this.materialForm.valid){
      console.log('Form Data:',this.materialForm.value);
      this.materialForm.reset();
    }
}


clearform(){
  this.materialForm.reset();
}
}
