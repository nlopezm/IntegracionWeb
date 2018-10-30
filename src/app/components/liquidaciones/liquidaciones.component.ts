import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-liquidaciones',
  templateUrl: './liquidaciones.component.html',
  styleUrls: ['./liquidaciones.component.scss']
})
export class LiquidacionesComponent{
search = '';
// liquidaciones
  liquidacionesTotales: any = [
    { id: 1, mesCierre: new Date('20/03/2019').getMonth, fechaCierre: '20/03/2019', fechaVencimiento: '18/04/2019'},
    { id: 2, mesCierre: new Date('10/03/2019').getMonth, fechaCierre: '10/03/2019', fechaVencimiento: '25/03/2019'},
    { id: 3, mesCierre: new Date('01/02/2019').getMonth, fechaCierre: '01/02/2019', fechaVencimiento: '30/03/2019'},
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
    { fecha: '22/03/2017', establecimiento:'Correas de distribucion Filippi', descripcion:'Lazos', montototal: 300, cols: 2, rows:2 },
    { fecha: '23/10/2015', establecimiento:'Supermercado Piti', descripcion:'Botines', montototal: 200, cols: 2, rows:2  },
    { fecha: '21/02/2017', establecimiento:'Gimnasio GUAU', descripcion:'Pesas', montototal: 30, cols: 2, rows:2  },
    { fecha: '02/09/2007', establecimiento:'KEKE seguros', descripcion:'Faraones', montototal: 100000000000, cols: 2, rows:2 },
    { fecha: '10/04/2017', establecimiento:'Japon Tech', descripcion:'Chocolates', montototal: 400, cols: 2, rows:2  },
    { fecha: '12/08/2017', establecimiento:'Jefe Drones', descripcion:'Los springsboks', montototal: 300, cols: 2, rows:2  },
  ];
  consumos: any;
  panelOpenState = false;
  loading = false;
  formGroup: FormGroup;

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

  constructor(private fb: FormBuilder) {
    this.liquidaciones = this.liquidacionesTotales;
    this.tarjetas = this.tarjetasCred;
    this.consumos = this.consumosTotales;
    this.formGroup = this.fb.group({
      numeroDocumento: ['', [Validators.required]],
      anioCierre: ['', [Validators.required, Validators.min(1980), Validators.max(2019)]],
      anioVencimiento: ['', [Validators.required, Validators.min(1980), Validators.max(2019)]],
      tarjeta: ['', [Validators.required]],
    });
  }

  // filtroMesCierre() {
  //   this.liquidaciones = this.liquidacionesTotales.filter((liquidaciones) => {
  //     const mesCierre = (this.liquidaciones.mesCierre);
  //     return (mesCierre.indexOf(this.search.toLowerCase()) > -1)
  //       || (mesCierre.documento && mesCierre.documento.toString().indexOf(this.search.toLowerCase()) > -1);
  //   });
  // }

}
