import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-receiving',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './receiving.component.html',
  styleUrl: './receiving.component.css'
})
export class ReceivingComponent {

  ReceivingForm : FormGroup;

  constructor(private fb:FormBuilder){
    this.ReceivingForm = this.fb.group({
      pcode: ['', Validators.required],
      des: ['', Validators.required],
      uom: ['' , Validators.required],
      loc: ['' , Validators.required],
      type: ['', Validators.required],
      pono: ['', Validators.required],
      podate: ['', Validators.required],
      vname: ['', Validators.required],
      bg: ['', Validators.required],
      dno:['', Validators.required],
      ddate: ['', Validators.required],
      pdate:['', Validators.required],
      bat:['',Validators.required],
      qty:['', Validators.required],
      val: ['',Validators.required],
      mfd:['', Validators.required],
      unitprice:['', Validators.required],
      expdate:['',Validators.required],
      grno:['', Validators.required],
      grdate:['',Validators.required],
      sgnum:['', Validators.required]
    })
  }

  onSubmit(){
    if(this.ReceivingForm.valid){
      console.log("Form Data:",this.ReceivingForm.value);
      
    }
  }

  clearform(){
    this.ReceivingForm.reset();
  }
}
