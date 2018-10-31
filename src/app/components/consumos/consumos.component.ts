import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ConsumoService } from '../../services/rest/consumo.service';

@Component({
  selector: 'app-consumos',
  templateUrl: './consumos.component.html',
  styleUrls: ['./consumos.component.scss']
})
export class ConsumosComponent implements OnInit {

  search = '';
  consumos: any = [];
  consumosFiltered: any;
  loading = false;

  constructor(private consumoService: ConsumoService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.consumoService.getConsumos().subscribe(
      (data) => {
        this.consumos = data;
        this.consumoService = data;
        this.loading = false;
      }, () => this.loading = false
    );
  }

  deleteConsumos(i: number) {

  }
}
