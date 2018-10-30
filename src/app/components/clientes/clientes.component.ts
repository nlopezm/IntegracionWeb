import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from 'src/app/components/dialogs/confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent {

  search = '';
  clientesTotales: any = [
    { id: 1, nombre: 'Nahuel', apellido: 'López', documento: 4520 },
    { id: 2, nombre: 'Nacho', apellido: 'Fili' },
    { id: 3, nombre: 'Ke', apellido: 'Cat' },
  ];
  clientes: any;
  loading = false;

  constructor(public dialog: MatDialog) {
    this.clientes = this.clientesTotales;
  }

  deleteCliente(i: number) {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        titulo: 'Eliminar cliente',
        descripcion: 'Estás seguro que querés eliminar a este cliente?',
        buttons: [
          { text: 'Cancelar', function: function () { console.log('Cancelado'); } },
          { text: 'Aceptar', function: function () { console.log('Borrado'); } }
        ]
      }
    });

  }

  searchCliente() {
    this.clientes = this.clientesTotales.filter((cliente) => {
      const nombre = (cliente.nombre + ' ' + cliente.apellido).toLowerCase();
      return (nombre.indexOf(this.search.toLowerCase()) > -1)
        || (cliente.documento && cliente.documento.toString().indexOf(this.search.toLowerCase()) > -1);
    });
  }

}
