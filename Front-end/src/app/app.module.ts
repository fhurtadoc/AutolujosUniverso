import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { dialog_createUser } from './components/admin/admin.component';
import { AdminComponent } from './components/admin/admin.component';
import { InfoVentasComponent } from './components/admin/info-ventas/info-ventas.component';
import { ClientesComponent } from './components/admin/clientes/clientes.component';
import { ProvedoresComponent } from './components/admin/provedores/provedores.component';
import { RegistroVentaComponent } from './components/admin/registro-venta/registro-venta.component';
import { InventarioComponent } from './components/admin/inventario/inventario.component';
import { ProductosComponent } from './components/admin/productos/productos.component';
import { HomeComponent } from './components/admin/home/home.component';
import { DialogNewproductComponent } from './components/admin/productos/dialog-newproduct/dialog-newproduct.component'; 




//MATERIAL
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatButtonModule} from '@angular/material/button'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { NewLoginComponent } from './login/new-login/new-login.component';
import { AlertClassComponent } from './tools/alert-class/alert-class.component'; 

@NgModule({
  declarations: [
    dialog_createUser,
    AppComponent,    
    LoginComponent,
    AdminComponent,
    InfoVentasComponent,
    ClientesComponent,
    ProvedoresComponent,
    RegistroVentaComponent,
    InventarioComponent,
    ProductosComponent,
    HomeComponent,
    DialogNewproductComponent,
    NewLoginComponent,
    AlertClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,    
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule    
  ],
  providers: [],
  bootstrap: [AppComponent, ProductosComponent, dialog_createUser ]
})
export class AppModule { }
