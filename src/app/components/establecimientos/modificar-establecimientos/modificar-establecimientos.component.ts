import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-modificar-establecimientos',
  templateUrl: './modificar-establecimientos.component.html',
  styleUrls: ['./modificar-establecimientos.component.scss']
})
export class ModificarEstablecimientosComponent {
startDate = new Date();

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      razonSocial: ['', [Validators.required]],
      CUIT: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
    });
  }
}
