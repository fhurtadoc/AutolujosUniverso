import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DialogData {
    id_categoria:number;
    codigo: number;
    nombre:String;
    precio_venta: String;
    stock:number;
    descripcion:String;
    imagen:String;
    estado:String;
    precio_compra:String;
}

@Component({
  selector: 'app-dialog-newproduct',
  templateUrl: './dialog-newproduct.component.html',
  styleUrls: ['./dialog-newproduct.component.css']
})
export class DialogNewproductComponent  {

  constructor(
    public dialogRef: MatDialogRef<DialogNewproductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  
  onNoClick(): void {
    this.dialogRef.close();
  }
  

}
