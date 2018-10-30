import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from 'src/app/components/dialogs/confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'app-establecimientos',
  templateUrl: './establecimientos.component.html',
  styleUrls: ['./establecimientos.component.scss']
})
export class EstablecimientosComponent {
  search = '';
  establecimientos: any = [
    { id: 1, razonSocial: 'Nahuel SA', apellido: 'López', documento: 4520 },
    { id: 2, razonSocial: 'HOla SRL', apellido: 'Fili' },
    { id: 3, razonSocial: 'ASFAsa SA', apellido: 'Cat' },
  ];
  establecimientosFiltered: any;
  loading = false;

  constructor(public dialog: MatDialog) {
    this.establecimientosFiltered = this.establecimientos;
  }

  deleteEstablecimiento(i: number) {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        titulo: 'Eliminar establecimiento',
        descripcion: 'Estás seguro que querés eliminar esta establecimiento?',
        buttons: [
          { text: 'Cancelar', function: function () { console.log('Cancelado'); } },
          { text: 'Aceptar', function: function () { console.log('Borrado'); } }
        ]
      }
    });

  }

  searchEstablecimiento() {
    this.establecimientosFiltered = this.establecimientos.filter((establecimiento) => {
      return (establecimiento.razonSocial.toLowerCase().indexOf(this.search.toLowerCase()) > -1);
    });
  }
}
