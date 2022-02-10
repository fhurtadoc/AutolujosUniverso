import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import { NewLoginComponent } from './login/new-login/new-login.component';
import{AdminComponent} from './components/admin/admin.component';
import {HomeComponent} from './components/admin/home/home.component';
import {ClientesComponent} from './components/admin/clientes/clientes.component';
import {InfoVentasComponent} from './components/admin/info-ventas/info-ventas.component';
import {InventarioComponent} from './components/admin/inventario/inventario.component';
import {ProductosComponent} from './components/admin/productos/productos.component';
import {ProvedoresComponent} from './components/admin/provedores/provedores.component';
import {RegistroVentaComponent} from './components/admin/registro-venta/registro-venta.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path: 'login',
    component: LoginComponent,        
  },
  {    
    path: 'New', component:NewLoginComponent    
  },
  {
    path: 'admin',
    component: AdminComponent,
    children:[
      {path: 'home', component: HomeComponent,},      
      {path: 'productos', component: ProductosComponent,},      
      {path: 'inventario', component: InventarioComponent,},      
      {path: 'registro_venta', component: RegistroVentaComponent,},      
      {path: 'clientes', component: ClientesComponent,},      
      {path: 'provedores', component: ProvedoresComponent,},     
      {path: 'informe_ventas', component: InfoVentasComponent,}      
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
