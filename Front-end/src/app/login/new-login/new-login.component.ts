import { Component, OnInit } from '@angular/core';
import {ConsultasService} from '../../services/consultas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-login',
  templateUrl: './new-login.component.html',
  styleUrls: ['./new-login.component.css']
})
export class NewLoginComponent implements OnInit {  
  password_confirm='';
  password='';  
  constructor(private consultas_serv:ConsultasService, private router: Router) { }

  ngOnInit(): void {
  }

  edit_pass():void{
    if(this.password ===this.password_confirm){
      let ruta='/users/edit_pass'
      let user_id=localStorage.getItem('id_user'); 
      let user_pass={
        user_id:user_id,
        contrasena:this.password
      }
      this.consultas_serv.consultas_put(ruta, user_pass).subscribe(
        res=>{
          if(res.codigo===200){
            this.router.navigate(['/login']);           
          }else{
            console.log('error');            
          }

          
        },
        err=>{
          console.log(err);
          
        }
      )
    }else{
      console.log('las contraseñas no coinciden');
      
    }
    
  }

}
