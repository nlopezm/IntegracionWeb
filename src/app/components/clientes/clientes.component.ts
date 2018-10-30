import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from 'src/app/components/dialogs/confirm-dialog/confirm-dialog.component';
import { ClienteService } from 'src/app/services/rest/cliente.service';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  search = '';
  clientesTotales: any;
  clientes: any;
  loading = false;

  constructor(public dialog: MatDialog, private rest: ClienteService) {
    this.clientes = this.clientesTotales;
  }

  ngOnInit(): void {
    this.loading = true;
    this.rest.getClientes().subscribe(
      (data) => { this.clientes = data; this.clientesTotales = data; this.loading = false; },
      (err) => this.loading = false,
    );
  }

  deleteCliente(id: number) {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        titulo: 'Eliminar cliente',
        descripcion: 'Estás seguro que querés eliminar a este cliente?',
        buttons: [
          { text: 'Cancelar', function: function () { console.log('Cancelado'); } },
          {
            text: 'Aceptar', function: function () { this.borrar(id); }
          }
        ]
      }
    });

  }

  borrar(id: number) {
    this.rest.deleteCliente(id).subscribe(
      () => {
        this.clientes = this.clientes.filter((cliente) => cliente.id !== id);
        this.clientesTotales = this.clientes.filter((cliente) => cliente.id !== id);
        alert('Cliente borrado');
      }, (e) => console.log(e)
    );
  }

  searchCliente() {
    this.clientes = this.clientesTotales.filter((cliente) => {
      const nombre = (cliente.nombre + ' ' + cliente.apellido).toLowerCase();
      return (nombre.indexOf(this.search.toLowerCase()) > -1)
        || (cliente.documento && cliente.documento.toString().indexOf(this.search.toLowerCase()) > -1);
    });
  }

}
