import { Component, ElementRef, OnInit, ViewChild, Output, Renderer2} from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';
import { trigger,transition, style, state, animate} from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations:[
    trigger('hidden', [
      state('inactive', style({
        height:'0%',
        visibility:'hidden',        
      })),
      state('active', style({
        visibility:'visible', 
        height:'50%'
      })),
      transition('inactive=>active', animate('1000ms ease-in',)),
      transition('active=>inactive', animate('1000ms ease-out')),
    ]) 
  ]
})

export class LoginComponent implements OnInit {  
  
  //@ViewChild('myVideo') public video:ElementRef |undefined;
  public state:String='inactive';
  user={
    correo:"",
    contrasena:""
  };
  @ViewChild('myVideo', {static: false}) myVideo: HTMLVideoElement | undefined;

  constructor(
    private render2: Renderer2,
    private authService:AuthService,
    private router:Router     
    ) { }

  ngOnInit(): void {        
    
    setTimeout(()=>{
      
      //document.getElementById('continerLogin')?.removeAttribute('hidden')      
      this.state='active';
      if(this.myVideo!=undefined){
        this.myVideo        
      }            
    },5300);        
    
  }
  

  logIn():void{    
    
    this.authService.signInUser(this.user).subscribe(
      res=>{
        if(res.estado===200){ 
          let status=res.usuario.estado
          if(status==0){
            localStorage.setItem('user', res.usuario.username);
            localStorage.setItem('id_user', res.usuario.id);
            this.router.navigate(['/New']);             
          }else{
            localStorage.setItem('user', res.usuario.username);                              
            localStorage.setItem('permisos', res.usuario.id_permisos);                              
            this.router.navigate(['/admin']);          
          }
          
        }else{
          this.router.navigate(['/login']);
        }        
      },
      err=>{
        console.log(err);
        
      }
    )        
  }

}
