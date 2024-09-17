import { Component, input } from '@angular/core';

import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {

 
  // tableData:any = [];

  // materialData = {
  //   partCode:'',
  //   description:'',
  //   umo:'',
  //   activity:'',
  //   ComponentUsage:'',
  //   type:'',
  //   rohsStatus:'',
  //   leadTime:'',
  //   msdStatus:'',
  //   bg:'',
  //   productGroup:'',
  //   productFamily:'',
  //   thLimit:'',
  //   productName:'',
  //   location:'',
  //   compatibility:'',
  //   unitPrice:''
  // };



  // constructor(private service:ServicesService){}

  // onSubmit(){

  //   this.tableData.push({...this.materialData});

  //   this.service.saveMaterialData(this.materialData).subscribe(Response => {
  //     console.log('Data saved to server:',Response)
  //   })
  // }
}
