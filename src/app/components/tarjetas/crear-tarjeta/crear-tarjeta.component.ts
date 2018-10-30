import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { TarjetaService } from '../../../services/rest/tarjeta.service';
import { ClienteService } from '../../../services/rest/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.scss']
})
export class CrearTarjetaComponent implements OnInit {

  formGroup: FormGroup;
  clientes: any;
  clientesFiltered: any;

  constructor(private fb: FormBuilder, private rest: TarjetaService,
    private restCli: ClienteService, private router: Router) {
    this.formGroup = this.fb.group({
      nroTarjeta: ['', [Validators.required]],
      fechaValidaDesde: ['', [Validators.required]],
      fechaValidaHasta: ['', [Validators.required]],
      codigoSeguridad: ['', [Validators.required, Validators.min(100), Validators.max(999)]],
      diaCierre: ['', [Validators.required, Validators.min(1), Validators.max(30)]],
      categoria: ['', [Validators.required]],
      montoLimite: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      clienteId: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.restCli.getClientes().subscribe(
      (data) => { this.clientes = data; this.clientesFiltered = data; }, () => { }
    );
  }

  create() {
    if (!this.formGroup.valid)
      return;

    this.rest.postTarjeta(this.formGroup.value).subscribe(
      () => {
        alert('Tarjeta creada!');
        this.router.navigateByUrl('/tarjetas');
      }, () => alert('Hubo un error. Volvé a intentarlo más tarde')
    );

  }

  filter(search) {
    this.clientesFiltered = this.clientes.filter((cliente) => {
      const nombre = (cliente.nombre + ' ' + cliente.apellido).toLowerCase();
      return (nombre.indexOf(search.toLowerCase()) > -1)
        || (cliente.documento && cliente.documento.toString().indexOf(search.toLowerCase()) > -1);
    });
  }

}
