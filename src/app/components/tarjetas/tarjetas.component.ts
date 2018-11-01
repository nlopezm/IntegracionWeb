import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from 'src/app/components/dialogs/confirm-dialog/confirm-dialog.component';
import { TarjetaService } from '../../services/rest/tarjeta.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent implements OnInit {

  search = '';
  tarjetas: any;
  tarjetasFiltered: any;
  loading = false;

  constructor(public dialog: MatDialog, private rest: TarjetaService) {
    this.tarjetasFiltered = this.tarjetas;
  }

  ngOnInit() {
    this.loading = true;
    this.rest.getTarjetas().subscribe(
      (data) => {
        this.tarjetas = data;
        this.tarjetasFiltered = data;
        this.loading = false;
      }, () => this.loading = false
    );

  }

  deleteTarjeta(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        titulo: 'Eliminar tarjeta',
        descripcion: 'Estás seguro que querés eliminar esta tarjeta?',
        buttons: [
          { text: 'Cancelar', function: function () { console.log('Cancelado'); } },
          { text: 'Aceptar', function: function () { console.log('Borrado'); } }
        ]
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.rest.deleteTarjeta(id).subscribe(
          () => {
            this.tarjetas = this.tarjetas.filter((tarjeta) => tarjeta.id !== id);
            this.tarjetasFiltered = this.tarjetas.filter((tarjeta) => tarjeta.id !== id);
            alert('Tarjeta borrada');
          }, (e) => console.log(e)
        );
      }
    });

  }

  searchTarjeta() {
    this.tarjetasFiltered = this.tarjetas.filter((tarjeta) => {
      return (tarjeta.nroTarjeta.toLowerCase().indexOf(this.search.toLowerCase()) > -1);
    });
  }
}
