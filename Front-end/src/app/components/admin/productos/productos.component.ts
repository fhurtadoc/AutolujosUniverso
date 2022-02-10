import { Component, OnInit, Renderer2, ViewChild, ElementRef,Inject } from '@angular/core';
import { ConsultasService} from '../../../services/consultas.service'
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

import {MatDialog} from '@angular/material/dialog';
import {DialogNewproductComponent} from './dialog-newproduct/dialog-newproduct.component';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { trigger,transition, style, state, animate} from '@angular/animations';


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
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  animations:[
    trigger('hidden', [
      state('inactive', style({
        width:'0%',
        visibility:'hidden',        
      })),
      state('active', style({        
        width:'20%',
        visibility:'visible', 
      })),
      transition('inactive=>active', animate('500ms ease-in',)),
      transition('active=>inactive', animate('500ms ease-out')),
    ]) 
  ]
})
export class ProductosComponent implements OnInit {
  @ViewChild('alert_div') alertDiv!: ElementRef;
  public state:String='inactive';
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
  "precio_compra",
  "Eliminar"

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

  public alerta=Array();
  public alertStatus='';
  public status_alert='';
  public result_end=''; 
  
  constructor(
    private consultas:ConsultasService, 
    public dialog: MatDialog,   
    private renderer: Renderer2,
       
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

  //eliminar elemento

  delete(id:number):void{

    var ruta="/articulo/delete/"+id;
    var StringAlert='Esta a punto de eliminar este Producto esta seguro';        
    this.DialogConfirm_delete(StringAlert, ruta);    
    
  }



  //funciones DOOM 

  openDialog(): void {
    this.list_category() 
    this.state='inactive';
    this.alerta.length=0;
    const dialogRef = this.dialog.open(DialogNewproductComponent, {
      width: '500px',
      height: '500px', 
      data: this.categoria      
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result===undefined){
        console.log("dialogo cerrado");         
      }else{        
        let validator_art=this.Validators(result);
        console.log(result.id_categoria); 
        let articulo={ 
          id_categoria:result.id_categoria,   
          codigo: result.codigo,
          nombre:result.nombre,
          precio_venta:result.precio_venta,
          stock:result.stock,
          descripcion:result.descripcion,
          imagen:result.imagen,
          estado:result.estado,
          precio_compra:result.precio_compra,
        }       
        
        if(validator_art.length===0){           
          this.consultas.consultas_post('/articulo/newArticulo', articulo).subscribe(
            res=>{
              this.alertStatus="true";
              this.alerta.length=0;
              this.alerta.push('Creado Correctamente el producto--'+res.nombre);               
              this.alertDiv.nativeElement.setAttribute('style', 'background-color: #ddffdd;');
              this.state='active'; 
              this.list();         
            }, 
            err=>{
              this.alerta.push('error en creacion');
              this.alertStatus="false";   
              this.state='active'                                
              
            }
      
          );
                
      }else{
        var errorArray=Array();
        validator_art.forEach(element => {          
          errorArray.push(element);
          this.alerta=errorArray;
          this.state='active'                    
        });  
        
      }

      }      
      
      
    });
  }

  DialogConfirm_delete(alerta:String, ruta:String):void{    
    const dialogRef = this.dialog.open(DialogAlert, {
      width: '200px',
      height: '200px', 
      data: alerta
    });     
    dialogRef.afterClosed().subscribe(result => { 
      if(result==='false'){
        console.log('no se elimino');      
      }else{
        this.consultas.consultas_delete(ruta).subscribe(
          res=>{
            console.log(res);
            this.alerta.length=0
            this.alerta.push(res.menssaje);               
            this.alertDiv.nativeElement.setAttribute('style', 'background-color: #ddffdd;');
            this.state='active'; 
            this.list();

          }, 
          err=>{
            console.log(err);
          }    
        );         
      }
    })
    
  }

  Validators(articulo:any){

    let arrors_create_article=[];    
    if(articulo.nombre===undefined || articulo.nombre==='' || articulo.nombre===null){                 
      arrors_create_article.push('error nombre incorrecto')      
    }
    if(articulo.codigo===undefined || articulo.codigo==='' || articulo.codigo===null){                 
      arrors_create_article.push('error codigo incorrecto')      
    }
    if(articulo.precio_venta===undefined || articulo.precio_venta==='' || articulo.precio_venta===null){                 
      arrors_create_article.push('error precio de venta incorrecto')      
    }
    if(articulo.stock===undefined || articulo.stock==='' || articulo.stock===null){                 
      arrors_create_article.push('error stock  incorrecto')      
    }
    if(articulo.descripcion===undefined || articulo.descripcion==='' || articulo.descripcion===null){                 
      arrors_create_article.push('error descripcion incorrecto')      
    }
    if(articulo.imagen===undefined || articulo.imagen==='' || articulo.imagen===null){                 
      arrors_create_article.push('error imagen incorrecto')      
    }
    if(articulo.estado===undefined || articulo.estado==='' || articulo.estado===null ){                 
      arrors_create_article.push('error estado incorrecto')      
    }
    if(articulo.precio_compra===undefined || articulo.precio_compra==='' || articulo.precio_compra===null){                 
      arrors_create_article.push('error precio_compra incorrecto')      
    }    
    return arrors_create_article;
  }




}

export interface AlertData {
  StringAlert:'';
}
@Component({
  selector: 'dialog-content-example-dialog',
  template: `<h2>!Advertencia</h2>
  <p>{{data}}</p>  
  
  <div mat-dialog-actions>
  <button mat-button  class="btn btn-light" (click)="onNoClick()" color="warn">Cancelar</button>    
  <button mat-button  class="btn btn-danger" (click)="confirmado()" cdkFocusInitial>Sí</button>
  </div>
  `
  
  ,
})

export class DialogAlert{

  constructor(
    public dialogRef: MatDialogRef<DialogAlert>,
    @Inject(MAT_DIALOG_DATA) public data: AlertData,
  ) { }

  onNoClick(): void {
    this.dialogRef.close('false');
  }

  confirmado(): void {
    this.dialogRef.close('true');
  }

}


