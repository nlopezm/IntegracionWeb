import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-crear-establecimiento',
  templateUrl: './crear-establecimiento.component.html',
  styleUrls: ['./crear-establecimiento.component.scss']
})
export class CrearEstablecimientoComponent {
  startDate = new Date();

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      razonSocial: ['', [Validators.required]],
      cuit: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
    });
  }
}
