import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { ClientesComponent } from 'src/app/components/clientes/clientes.component';
import { CrearClienteComponent } from 'src/app/components/clientes/crear-cliente/crear-cliente.component';
import { CobranzasComponent } from 'src/app/components/cobranzas/cobranzas.component';
import { ConsumosComponent } from 'src/app/components/consumos/consumos.component';
import { EstablecimientosComponent } from 'src/app/components/establecimientos/establecimientos.component';
import { CrearEstablecimientoComponent } from 'src/app/components/establecimientos/crear-establecimiento/crear-establecimiento.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { LiquidacionesComponent } from 'src/app/components/liquidaciones/liquidaciones.component';
import { TarjetasComponent } from 'src/app/components/tarjetas/tarjetas.component';
import { CrearTarjetaComponent } from 'src/app/components/tarjetas/crear-tarjeta/crear-tarjeta.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

const routes: Routes = [
  { path: 'clientes', component: ClientesComponent, pathMatch: 'full', data: { title: 'Clientes' } },
  { path: 'clientes/crear', component: CrearClienteComponent, pathMatch: 'full', data: { title: 'Crear cliente' } },
  { path: 'home', component: HomeComponent, pathMatch: 'full', data: { title: 'Home' } },
  { path: 'cobranzas', component: CobranzasComponent, pathMatch: 'full', data: { title: 'Cobranzas' } },
  { path: 'consumos', component: ConsumosComponent, pathMatch: 'full', data: { title: 'Consumos' } },
  { path: 'establecimientos', component: EstablecimientosComponent, pathMatch: 'full', data: { title: 'Establecimientos' } },
  { path: 'establecimientos/crear', component: CrearEstablecimientoComponent, pathMatch: 'full', data: { title: 'Crear establecimiento' } },
  { path: 'tarjetas', component: TarjetasComponent, pathMatch: 'full', data: { title: 'Tarjetas' } },
  { path: 'tarjetas/crear', component: CrearTarjetaComponent, pathMatch: 'full', data: { title: 'Crear tarjeta' } },
  { path: 'liquidaciones', component: LiquidacionesComponent, pathMatch: 'full', data: { title: 'Liquidaciones' } },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
