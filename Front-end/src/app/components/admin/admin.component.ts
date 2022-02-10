import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { ConsultasService } from '../../services/consultas.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public userName=localStorage.getItem('user');    
  public level_acces='';  
  public User_data={
    nom_usuario:'',  
    permisos:0,
    correo:'',
    estado:0,
  }
  


  constructor( private router:Router, public dialog_createUser: MatDialog, private consultasService:ConsultasService     ) { }

  ngOnInit(): void {
    let acces=localStorage.getItem('permisos');
    if(acces){
      this.level_acces=acces;
      console.log(this.level_acces);      
    }
    
  }

  salir():void{
    localStorage.removeItem('user');
  }

  create_user():void{
    const dialogRef2 = this.dialog_createUser.open(dialog_createUser, {
      width: '800px',
      height: '500px',
      data: this.User_data
    });    
    dialogRef2.afterClosed().subscribe(result => {
      //let error_list=this.Validators(result);
      //if(error_list.length===0){        
        let newUser={
          nom_usuario:result.nom_usuario,
          contrasena:'0',
          permisos:result.id_permisos,
          correo:result.correo,
          estado:0,
        }        
        var ruta='/users/nuevo';
        this.consultasService.consultas_post(ruta, newUser ).subscribe(
          res=>{
              console.log('se creo correctamente');              
          },
          err=>{
            console.log('Error');             
          }
        )
      
    })
  }

  Validators(usuario:any){

    let arrors_create_article=[]; 
    var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(usuario.nom_usuario===undefined || usuario.nom_usuario==='' || usuario.nom_usuario===null){                 
      arrors_create_article.push('error Nombre de Usuario')      
    }
    if(usuario.permisos===undefined || usuario.permisos==='' || usuario.permisos===null || usuario.permisos===0){                 
      arrors_create_article.push('error permisos incorrecto')      
    }
    if(usuario.correo===undefined || usuario.correo==='' || usuario.correo===null || !usuario.correo.match(EMAIL_REGEX) ){                 
      arrors_create_article.push('error correo incorrecto')      
    }
    if(usuario.estado===undefined || usuario.estado==='' || usuario.estado===null || usuario.estado===0){                 
      arrors_create_article.push('error estado  incorrecto')      
    }    
    return arrors_create_article;
  }

}
//-----------------------CLASE DIALOG ---------------------------//
export interface DialogData {
  nom_usuario:String;  
  id_permisos:number;
  correo:String;  
}

export interface Permisos {
  id_permisos:number;  
  nombre_permisos:String;
  detalle:String;
  
}

export interface Users {
  id:number;  
  username:String;
  email:String;
  
}

@Component({
  selector: 'app-dialog_createUser',
  templateUrl: './dialog.componet.html',  
})
export class dialog_createUser implements OnInit {
  
  permisos:Array<Permisos>=[];
  find_word='';
  users:Array<Users>=[];
  
  constructor(
    public dialogRef2: MatDialogRef<dialog_createUser>,
    @Inject(MAT_DIALOG_DATA) public data_usua: DialogData,
    private consultasService:ConsultasService     
  ) { }

  ngOnInit(): void {    
    let ruta='/users/permisos';
    this.consultasService.consultas_get(ruta).subscribe(
      res=>{
        this.permisos=res.object;
        console.log(this.permisos);
        
      }, 
      err=>{
        console.log(err);
      }

    );
  }

find_user(): void{  
    let ruta='/users/findAsync/'+this.find_word;
    console.log(this.find_word);    
    this.consultasService.consultas_get(ruta).subscribe(
      res=>{
        this.users=res;
      }, 
      err=>{
        console.log(err);
      }
    );  
}

  onNoClick(): void {
    this.dialogRef2.close();    
    
  }





}
