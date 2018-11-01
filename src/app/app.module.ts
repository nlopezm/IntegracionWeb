import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { ClientesComponent } from 'src/app/components/clientes/clientes.component';
import { CrearClienteComponent } from 'src/app/components/clientes/crear-cliente/crear-cliente.component';
import { ModificarClienteComponent } from 'src/app/components/clientes/modificar-cliente/modificar-cliente.component';
import { CobranzasComponent } from 'src/app/components/cobranzas/cobranzas.component';
import { ConsumosComponent } from 'src/app/components/consumos/consumos.component';
import { CrearConsumoComponent } from 'src/app/components/consumos/crear-consumo/crear-consumo.component';
import { EstablecimientosComponent } from 'src/app/components/establecimientos/establecimientos.component';
import { CrearEstablecimientoComponent } from 'src/app/components/establecimientos/crear-establecimiento/crear-establecimiento.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { LiquidacionesComponent } from 'src/app/components/liquidaciones/liquidaciones.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { TarjetasComponent } from 'src/app/components/tarjetas/tarjetas.component';
import { CrearTarjetaComponent } from 'src/app/components/tarjetas/crear-tarjeta/crear-tarjeta.component';
import { ModificarTarjetaComponent } from 'src/app/components/tarjetas/modificar-tarjeta/modificar-tarjeta.component';
import { ModificarEstablecimientosComponent } from 'src/app/components/establecimientos/modificar-establecimientos/modificar-establecimientos.component';

//Dialogs
import { ConfirmDialogComponent } from 'src/app/components/dialogs/confirm-dialog/confirm-dialog.component';

// Services
import { ClienteService } from './services/rest/cliente.service';
import { EstablecimientoService } from './services/rest/establecimiento.service';
import { CobranzaService } from './services/rest/cobranza.service';
import { ConsumoService } from './services/rest/consumo.service';
import { LiquidacionService } from './services/rest/liquidacion.service';
import { TarjetaService } from './services/rest/tarjeta.service';
import { RestService } from './services/rest/rest.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientesComponent,
    CrearClienteComponent,
    ModificarClienteComponent,
    CobranzasComponent,
    ConsumosComponent,
    CrearConsumoComponent,
    EstablecimientosComponent,
    CrearEstablecimientoComponent,
    HomeComponent,
    LiquidacionesComponent,
    TarjetasComponent,
    CrearTarjetaComponent,
    ModificarTarjetaComponent,
    ModificarEstablecimientosComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ClienteService,
    CobranzaService,
    ConsumoService,
    EstablecimientoService,
    LiquidacionService,
    TarjetaService,
    RestService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class AppModule { }
