import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-rc-main',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './rc-main.component.html',
  styleUrl: './rc-main.component.css'
})
export class RcMainComponent {

  
  materialForm : FormGroup;

  constructor(private fb:FormBuilder){
    this.materialForm = this.fb.group({
      partCode:['', Validators.required],
      description:['', Validators.required],
      umo:['', Validators.required],
      activity:['' , Validators.required],
      Componentusage:['', Validators.required],
      types:['', Validators.required],
      rohsStatus:['', Validators.required],
      leadTime:['', Validators.required],
      msdStatus:['', Validators.required],
      bg:['', Validators.required],
      productGroup:['', Validators.required],
      productFamily:['', Validators.required],
      thLimit:['', Validators.required],
      productName:['', Validators.required],
      location:['', Validators.required],
      compatibility:['', Validators.required],
      unitPrice:['', Validators.required]
    })
  }

  onSubmit(){
    if(this.materialForm.valid){
      console.log('Form Data:',this.materialForm.value);
      // this.materialForm.reset();
    }
}


clearform(){
  this.materialForm.reset();
}




}
