import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {
  private URL = 'http://localhost:3000';
  constructor(private http: HttpClient, private router: Router) { }

  consultas_post(ruta:String, object:any ){     
    return this.http.post<any>(this.URL + ruta, object); 
  }

  consultas_put(ruta:String, object:any){
    return this.http.put<any>(this.URL + ruta, object); 
  }

  consultas_delete(ruta:String){
    return this.http.delete<any>(this.URL + ruta); 
  }

  consultas_get(ruta:String){
    return this.http.get<any>(this.URL + ruta); 
  }

  consultas_getWith_param(ruta:String){
    return this.http.get<any>(this.URL + ruta); 
  }

}



