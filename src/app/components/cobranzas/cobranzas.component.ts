import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LiquidacionService } from '../../services/rest/liquidacion.service';
import { ClienteService } from 'src/app/services/rest/cliente.service';
import { RestService } from 'src/app/services/rest/rest.service';

@Component({
  selector: 'app-cobranzas',
  templateUrl: './cobranzas.component.html',
  styleUrls: ['./cobranzas.component.scss']
})
export class CobranzasComponent implements OnInit {
  search = '';
  // liquidaciones
  liquidaciones: any = [];
  liquidacionesFiltered: any = [];

  clientes: any = [];
  clientesFiltered: any = [];
  clienteFormGroup: FormGroup;

  tarjetas: any = [];
  tarjetasFiltered: any = [];
  tarjetaFormGroup: FormGroup;

  panelOpenState = false;
  loading = false;
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private liquidacionService: LiquidacionService,
    private _formBuilder: FormBuilder,
    private clientesService: ClienteService, private restService: RestService) {
    this.clienteFormGroup = this._formBuilder.group({
      idCliente: ['', [Validators.required]]
    });
    this.tarjetaFormGroup = this._formBuilder.group({
      idTarjeta: ['', [Validators.required]]
    });
    this.fechaFormGroup = this._formBuilder.group({
      anioCierre: ['', [Validators.min(1980), Validators.max(2019)]],
      mesCierre: ['', [Validators.min(1), Validators.max(12)]]

    });

  }

  ngOnInit() {
    this.liquidacionService.getLiquidaciones().subscribe(
      (data) => {
        this.liquidaciones = data;
        this.liquidacionesFiltered = data;
      },
      () => { }
    );
    this.clientesService.getClientes().subscribe(
      (data) => {
        this.clientes = data;
        this.clientesFiltered = data;
      }, () => { }
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

  onTarjetaSelected(event) {
    const tarjetaId = event.option.value;
    this.liquidacionService.getByTarjeta(tarjetaId).subscribe(
      (data) => {
        console.log(data);
        this.liquidaciones = data;
        this.liquidacionesFiltered = data;
      },
      () => { }
    );
  }

}
