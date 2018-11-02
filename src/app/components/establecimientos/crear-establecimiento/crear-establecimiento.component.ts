import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EstablecimientoService } from '../../../services/rest/establecimiento.service';

@Component({
  selector: 'app-crear-establecimiento',
  templateUrl: './crear-establecimiento.component.html',
  styleUrls: ['./crear-establecimiento.component.scss']
})
export class CrearEstablecimientoComponent {
  startDate = new Date();

  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private rest: EstablecimientoService) {
    this.formGroup = this.fb.group({
      razonSocial: ['', [Validators.required]],
      cuit: ['', [Validators.required, Validators.min(10000000000), Validators.max(99999999999)]],
      domicilio: ['', [Validators.required]],
      cbu: ['', [Validators.required, Validators.min(1000000000)]]
    });
  }

  create() {
    if (!this.formGroup.valid)
      return;
    this.rest.postEstablecimiento(this.formGroup.value).subscribe(
      () => {
        alert('Establecimiento creado!');
        this.router.navigateByUrl('/establecimientos');
      },
      () => alert('Hubo un error. Volvé a intertarlo')
    );
  }

}
