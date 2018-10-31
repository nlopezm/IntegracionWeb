import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cobranzas',
  templateUrl: './cobranzas.component.html',
  styleUrls: ['./cobranzas.component.scss']
})
export class CobranzasComponent {
  search = '';
  // liquidaciones
  liquidacionesTotales: any = [
    { id: 1, mesCierre: new Date('20/03/2019').getMonth, fechaCierre: '20/03/2019', fechaVencimiento: '18/04/2019', estado: true },
    { id: 2, mesCierre: new Date('10/03/2019').getMonth, fechaCierre: '10/03/2019', fechaVencimiento: '25/03/2019', estado: true },
    { id: 3, mesCierre: new Date('01/02/2019').getMonth, fechaCierre: '01/02/2019', fechaVencimiento: '30/03/2019', estado: false},
  ];
  liquidaciones: any;
  // tarjetas
  tarjetasCred: any = [
    { id: 4444000033335555 },
    { id: 4332134233335555 },
    { id: 4484127864262838 },
  ];
  tarjetas: any;
  // consumos
  consumosTotales: any = [
    { fecha: '22/03/2017', establecimiento: 'Correas de distribucion Filippi', descripcion: 'Lazos', monto: 300, cols: 2, rows: 2 },
    { fecha: '23/10/2015', establecimiento: 'Supermercado Piti', descripcion: 'Botines', monto: 200, cols: 2, rows: 2 },
    { fecha: '21/02/2017', establecimiento: 'Gimnasio GUAU', descripcion: 'Pesas', monto: 30, cols: 2, rows: 2 },
    { fecha: '02/09/2007', establecimiento: 'KEKE seguros', descripcion: 'Faraones', monto: 100000000000, cols: 2, rows: 2 },
    { fecha: '10/04/2017', establecimiento: 'Japon Tech', descripcion: 'Chocolates', monto: 400, cols: 2, rows: 2 },
    { fecha: '12/08/2017', establecimiento: 'Jefe Drones', descripcion: 'Los springsboks', monto: 300, cols: 2, rows: 2 },
  ];
  consumos: any;
  panelOpenState = false;
  loading = false;
  tercerFormGroup: FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor(private fb: FormBuilder, private _formBuilder: FormBuilder) {
    this.liquidaciones = this.liquidacionesTotales;
    this.tarjetas = this.tarjetasCred;
    this.consumos = this.consumosTotales;
    this.firstFormGroup = this._formBuilder.group({
      numeroDocumento: ['', [Validators.required]],
      tarjeta: ['', [Validators.required]]
    });
    this.secondFormGroup = this._formBuilder.group({
      anioCierre: ['', [Validators.required, Validators.min(1980), Validators.max(2019)]]

    });
    this.tercerFormGroup = this._formBuilder.group({
      anioVencimiento: ['', [Validators.required, Validators.min(1980), Validators.max(2019)]]
    });
  }


}
