import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ClienteService } from '../../../services/rest/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.scss']
})
export class CrearClienteComponent {
  startDate = new Date();

  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private rest: ClienteService, private router: Router) {
    this.formGroup = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      tipoDocumento: ['', [Validators.required]],
      nroDocumento: ['', [Validators.required]],
      fechaNacimiento: ['', [Validators.required]],
    });
  }

  crear() {
    if (!this.formGroup.valid)
      return;
    this.rest.postCliente(this.formGroup.value).subscribe(
      (res) => {
        this.router.navigateByUrl('/clientes');
        alert('Cliente creado!');
      },
      (err) => { console.log(err); }
    );
  }

}
