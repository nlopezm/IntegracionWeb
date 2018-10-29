import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-crear-consumo',
  templateUrl: './crear-consumo.component.html',
  styleUrls: ['./crear-consumo.component.scss']
})
export class CrearConsumoComponent implements OnInit {
  clientes: any = [
    { id: 1, nombre: 'Nahuel', apellido: 'López', documento: 4520 },
    { id: 2, nombre: 'Nacho', apellido: 'Fili' },
    { id: 3, nombre: 'Ke', apellido: 'Cat' },
  ];
  clientesFiltered: any = [];
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      monto: ['', [Validators.required]],
      cliente: ['', [Validators.required]],
    });
    this.clientesFiltered = this.clientes;
  }

  ngOnInit() {
  }

  filter(search) {
    this.clientesFiltered = this.clientes.filter((cliente) => {
      const nombre = (cliente.nombre + ' ' + cliente.apellido).toLowerCase();
      return (nombre.indexOf(search.toLowerCase()) > -1)
        || (cliente.documento && cliente.documento.toString().indexOf(search.toLowerCase()) > -1);
    });
  }

}
