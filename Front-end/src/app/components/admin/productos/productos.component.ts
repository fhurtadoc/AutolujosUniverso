import { Component, OnInit } from '@angular/core';
import { ConsultasService} from '../../../services/consultas.service'
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

import {MatDialog} from '@angular/material/dialog';
import {DialogNewproductComponent} from './dialog-newproduct/dialog-newproduct.component';







@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  categoria=[];
  dataSource = [];
  displayedColumns: string[] = ["id_articulo",
  "categoria",
  "codigo",
  "nombre",
  "precio_venta",
  "stock",
  "descripcion",
  "imagen",
  "estado",
  "precio_compra"
  ];  


  articulo={
    id_categoria:0,
    codigo: 0,
    nombre:'',
    precio_venta:'',
    stock:0,
    descripcion:'',
    imagen:'',
    estado:0,
    precio_compra:'',
  }
    
  
  constructor(
    private consultas:ConsultasService, 
    public dialog: MatDialog,    
    ) { }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  ngOnInit(): void {
    this.list();
  }

  //funciones Crud 

  list(){
    var ruta="/articulo/list"
    this.consultas.consultas_get(ruta).subscribe(
      res=>{
        console.log(res);        
        this.dataSource=res;
      }, 
      err=>{
        console.log(err);
      }

    );

  }

  list_category(){
    var ruta="/categoria/listar"
    this.consultas.consultas_get(ruta).subscribe(
      res=>{
        console.log(res);        
        this.categoria=res;
      }, 
      err=>{
        console.log(err);
      }

    );

  }



  //funciones DOOM 

  openDialog(): void {
    this.list_category()    
    const dialogRef = this.dialog.open(DialogNewproductComponent, {
      width: '500px',
      height: '200px', 
      data: this.categoria      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('cerrar dialogo');
      this.articulo = result;
    });
  }


}


