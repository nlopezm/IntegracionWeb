import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ClienteService } from '../../../services/rest/cliente.service';
import { EstablecimientoService } from '../../../services/rest/establecimiento.service';
import { ConsumoService } from '../../../services/rest/consumo.service';
import { Router } from '@angular/router';
import { RestService } from '../../../services/rest/rest.service';

@Component({
  selector: 'app-crear-consumo',
  templateUrl: './crear-consumo.component.html',
  styleUrls: ['./crear-consumo.component.scss']
})
export class CrearConsumoComponent implements OnInit {
  clientes: any = [];
  clientesFiltered: any = [];
  tarjetas: any = [];
  tarjetasFiltered: any = [];
  establecimientos: any = [];
  establecimientosFiltered: any = [];
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private clienteService: ClienteService,
    private establecimientoService: EstablecimientoService,
    private consumoService: ConsumoService, private router: Router, private restService: RestService) {

    this.formGroup = this.fb.group({
      monto: ['', [Validators.required]],
      clienteId: ['', [Validators.required]],
      tarjetaId: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      idEstablecimiento: ['', [Validators.required]],
      codigoSeguridad: ['', [Validators.required, Validators.min(100), Validators.max(999)]],
    });
    this.clientesFiltered = this.clientes;
  }

  ngOnInit() {
    this.clienteService.getClientes().subscribe(
      (data) => { this.clientes = data; this.clientesFiltered = data; }, () => { }
    );
    this.establecimientoService.getEstablecimientos().subscribe(
      (data) => { this.establecimientos = data; this.establecimientosFiltered = data; }, () => { }
    );
  }

  filterClientes(search) {
    this.clientesFiltered = this.clientes.filter((cliente) => {
      const nombre = (cliente.nombre + ' ' + cliente.apellido).toLowerCase();
      return (nombre.indexOf(search.toLowerCase()) > -1)
        || (cliente.documento && cliente.documento.toString().indexOf(search.toLowerCase()) > -1);
    });
  }

  filterTarjetas(search) {
    this.tarjetasFiltered = this.tarjetas.filter((tarjeta) => tarjeta.nroTarjeta === search);
  }

  onClienteSelected(event) {
    const clienteId = event.option.value;
    const cliente = this.clientes.filter((cliente) => cliente.id === clienteId)[0];
    this.restService.get(cliente._links.tarjetas.href).subscribe(
      (data) => {
        this.tarjetas = data['tarjetas'] || [];
        this.tarjetasFiltered = this.tarjetas;
      },
      () => { }
    );

  }

  filterEstablecimientos(search) {
    this.establecimientosFiltered = this.establecimientos.filter((establecimiento) => {
      return (establecimiento.razonSocial.toLowerCase().indexOf(search.toLowerCase()) > -1);
    });
  }

  create() {
    console.log(this.formGroup.value);
    if (!this.formGroup.valid)
      return;

    this.consumoService.postConsumo(this.formGroup.value).subscribe(
      () => {
        this.router.navigateByUrl('/consumos');
        alert('Consumo creado!');
      }, () => alert('Hubo un error. Volvé a intentarlo.')
    );
  }

}
