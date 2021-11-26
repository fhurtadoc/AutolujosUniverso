import { Component, OnInit } from '@angular/core';
import { ConsultasService} from '../../../services/consultas.service'
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

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
  
  constructor(private consultas:ConsultasService) { }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  ngOnInit(): void {
    this.list();
  }

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

}
