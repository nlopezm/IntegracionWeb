import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-liquidaciones',
  templateUrl: './liquidaciones.component.html',
  styleUrls: ['./liquidaciones.component.scss']
})
export class LiquidacionesComponent{
search = '';
  liquidacionesTotales: any = [
    { id: 1, mesCierre: new Date('20/03/2019').getMonth, fechaCierre: '20/03/2019', fechaVencimiento: '18/04/2019'},
    { id: 2, mesCierre: new Date('10/03/2019').getMonth, fechaCierre: '10/03/2019', fechaVencimiento: '25/03/2019'},
    { id: 3, mesCierre: new Date('01/02/2019').getMonth, fechaCierre: '01/02/2019', fechaVencimiento: '30/03/2019'},
  ];
  liquidaciones: any;
  tarjetasCred: any = [
    { id: 4444000033335555 },
    { id: 4332134233335555 },
    { id: 4484127864262838 },
  ];
  tarjetas: any;
  loading = false;
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.liquidaciones = this.liquidacionesTotales;
    this.tarjetas = this.tarjetasCred;
    this.formGroup = this.fb.group({
      numeroDocumento: ['', [Validators.required]],
      anioCierre: ['', [Validators.required, Validators.min(1980), Validators.max(2019)]],
      anioVencimiento: ['', [Validators.required, Validators.min(1980), Validators.max(2019)]],
      tarjeta: ['', [Validators.required]],
    });
  }

  filtroMesCierre() {
    this.liquidaciones = this.liquidacionesTotales.filter((liquidaciones) => {
      const mesCierre = (this.liquidaciones.mesCierre);
      return (mesCierre.indexOf(this.search.toLowerCase()) > -1)
        || (mesCierre.documento && mesCierre.documento.toString().indexOf(this.search.toLowerCase()) > -1);
    });
  }

}
