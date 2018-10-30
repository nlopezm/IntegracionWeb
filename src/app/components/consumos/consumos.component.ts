import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-consumos',
  templateUrl: './consumos.component.html',
  styleUrls: ['./consumos.component.scss']
})
export class ConsumosComponent implements OnInit {

  search = '';
  consumos: any = [
    { id: 1, nombre: 'Consumo 1', apellido: 'López', documento: 4520 },
    { id: 2, nombre: 'Consumo 2', apellido: 'Fili' },
    { id: 3, nombre: 'Consumo 3', apellido: 'Cat' },
  ];
  consumosFiltered: any;
  loading = false;

  constructor() {
    this.consumosFiltered = this.consumos;
  }

  ngOnInit(): void {
  }

  deleteConsumos(i: number) {

  }
}
