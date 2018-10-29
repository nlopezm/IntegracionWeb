import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.component.html',
  styleUrls: ['./modificar-cliente.component.scss']
})
export class ModificarClienteComponent  {

  startDate = new Date();

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      nacimiento: ['', [Validators.required]],
    });
  }

}
