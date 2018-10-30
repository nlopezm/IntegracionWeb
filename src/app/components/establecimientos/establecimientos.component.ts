import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from 'src/app/components/dialogs/confirm-dialog/confirm-dialog.component';
import { EstablecimientoService } from 'src/app/services/rest/establecimiento.service';
@Component({
  selector: 'app-establecimientos',
  templateUrl: './establecimientos.component.html',
  styleUrls: ['./establecimientos.component.scss']
})
export class EstablecimientosComponent implements OnInit {
  search = '';
  establecimientos: any;
  establecimientosFiltered: any;
  loading = false;

  constructor(public dialog: MatDialog, private rest: EstablecimientoService) {
    this.establecimientosFiltered = this.establecimientos;
  }

  ngOnInit(): void {
    this.loading = true;
    this.rest.getEstablecimientos().subscribe((data) => {
      this.establecimientos = data;
      this.establecimientosFiltered = data;
      this.loading = false;
    }, () => this.loading = false);

  }

  deleteEstablecimiento(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        titulo: 'Eliminar establecimiento',
        descripcion: 'Estás seguro que querés eliminar esta establecimiento?',
        buttons: [
          { text: 'Cancelar', function: function () { console.log('Cancelado'); } },
          { text: 'Aceptar', function: function () { console.log('Borrado'); } }
        ]
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.rest.deleteEstablecimiento(id).subscribe(
          () => {
            this.establecimientos = this.establecimientos.filter((establecimiento) => establecimiento.id !== id);
            this.establecimientosFiltered = this.establecimientos.filter((establecimiento) => establecimiento.id !== id);
            alert('Establecimiento borrado');
          }, (e) => console.log(e)
        );
      }
    });

  }

  searchEstablecimiento() {
    console.log (this.search);
    this.establecimientosFiltered = this.establecimientos.filter((establecimiento) => {
      return (establecimiento.razonSocial.toLowerCase().indexOf(this.search.toLowerCase()) > -1);
    });
  }
}
