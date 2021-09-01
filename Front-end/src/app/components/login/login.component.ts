import { Component, ElementRef, OnInit, ViewChild, Output, Renderer2} from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {  
  
  //@ViewChild('myVideo') public video:ElementRef |undefined;
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
      
      document.getElementById('continerLogin')?.removeAttribute('hidden')      
      if(this.myVideo!=undefined){
        this.myVideo        
      }            
    },5300);        
    
  }
  

  logIn():void{    
    
    this.authService.signInUser(this.user).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/admin']);
      },
      err=>{
        console.log(err);
        
      }
    )        
  }

}
