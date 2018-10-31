import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LiquidacionService } from '../../services/rest/liquidacion.service';

@Component({
  selector: 'app-liquidaciones',
  templateUrl: './liquidaciones.component.html',
  styleUrls: ['./liquidaciones.component.scss']
})
export class LiquidacionesComponent implements OnInit {
  search = '';
  // liquidaciones
  liquidaciones: any = [];
  liquidacionesFiltered: any = [];
  // tarjetas
  tarjetasCred: any = [
    { id: 4444000033335555 },
    { id: 4332134233335555 },
    { id: 4484127864262838 },
  ];
  tarjetas: any;
  panelOpenState = false;
  loading = false;
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private liquidacionService: LiquidacionService) {
    this.tarjetas = this.tarjetasCred;
    this.formGroup = this.fb.group({
      numeroDocumento: ['', [Validators.required]],
      anioCierre: ['', [Validators.required, Validators.min(1980), Validators.max(2019)]],
      anioVencimiento: ['', [Validators.required, Validators.min(1980), Validators.max(2019)]],
      tarjeta: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.liquidacionService.getLiquidaciones().subscribe(
      (data) => {
        console.log (data);
        this.liquidaciones = data;
        this.liquidacionesFiltered = data;
      },
      () => { }
    );
  }

}
