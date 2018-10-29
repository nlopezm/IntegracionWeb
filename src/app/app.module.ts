import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { ClientesComponent } from 'src/app/components/clientes/clientes.component';
import { CrearClienteComponent } from 'src/app/components/clientes/crear-cliente/crear-cliente.component';
import { CobranzasComponent } from 'src/app/components/cobranzas/cobranzas.component';
import { ConsumosComponent } from 'src/app/components/consumos/consumos.component';
import { EstablecimientosComponent } from 'src/app/components/establecimientos/establecimientos.component';
import { CrearEstablecimientoComponent } from 'src/app/components/establecimientos/crear-establecimiento/crear-establecimiento.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { LiquidacionesComponent } from 'src/app/components/liquidaciones/liquidaciones.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

// Services
import { RestService } from './services/rest/rest.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientesComponent,
    CrearClienteComponent,
    CobranzasComponent,
    ConsumosComponent,
    EstablecimientosComponent,
    HomeComponent,
    LiquidacionesComponent,
    CrearEstablecimientoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    RestService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
