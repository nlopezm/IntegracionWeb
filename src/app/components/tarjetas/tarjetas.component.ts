import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from 'src/app/components/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent {

  search = '';
  tarjetas: any = [
    { id: 1, numero: '1562130306516', apellido: 'López', documento: 4520 },
    { id: 2, numero: '498412106532', apellido: 'Fili' },
    { id: 3, numero: '789415612021', apellido: 'Cat' },
  ];
  tarjetasFiltered: any;
  loading = false;

  constructor(public dialog: MatDialog) {
    this.tarjetasFiltered = this.tarjetas;
  }

  deleteTarjeta(i: number) {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        titulo: 'Eliminar tarjeta',
        descripcion: 'Estás seguro que querés eliminar esta tarjeta?',
        buttons: [
          { text: 'Cancelar', function: function () { console.log('Cancelado'); } },
          { text: 'Aceptar', function: function () { console.log('Borrado'); } }
        ]
      }
    });

  }

  searchTarjeta() {
    this.tarjetasFiltered = this.tarjetas.filter((tarjeta) => {
      return (tarjeta.numero.toLowerCase().indexOf(this.search.toLowerCase()) > -1);
    });
  }
}
