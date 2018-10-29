import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-modificar-tarjeta',
  templateUrl: './modificar-tarjeta.component.html',
  styleUrls: ['./modificar-tarjeta.component.scss']
})
export class ModificarTarjetaComponent {

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      numero: ['', [Validators.required]],
      valido_desde: ['', [Validators.required]],
      valido_hasta: ['', [Validators.required]],
      cod_seguridad: ['', [Validators.required]],
      fecha_cierre: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      monto_limite: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      documento: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
    });
  }

}
