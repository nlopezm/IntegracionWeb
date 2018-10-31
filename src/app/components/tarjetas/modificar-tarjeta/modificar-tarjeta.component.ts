import { Component, OnInit } from '@angular/core';
import { TarjetaService } from '../../../services/rest/tarjeta.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RestService } from '../../../services/rest/rest.service';

@Component({
  selector: 'app-modificar-tarjeta',
  templateUrl: './modificar-tarjeta.component.html',
  styleUrls: ['./modificar-tarjeta.component.scss']
})
export class ModificarTarjetaComponent implements OnInit {

  tarjeta: any;
  tarjetaId: number;
  loading = false;
  cliente: string;

  constructor(private tarjetaService: TarjetaService, private router: Router,
    private route: ActivatedRoute, private rest: RestService) {
    this.tarjetaId = this.route.snapshot.params.tarjetaId;
  }

  ngOnInit() {
    this.loading = true;
    this.tarjetaService.getTarjeta(this.tarjetaId).subscribe(
      (data) => {
        this.rest.get(data['_links'].cliente.href).subscribe(
          (data) => { this.tarjeta.cliente = data; this.cliente = data['nombre'] + ' ' + data['apellido']; }, () => { }
        );
        this.tarjeta = data;
        this.loading = false;
        this.tarjeta['fechaValidaDesde'] = new Date(data['fechaValidaDesde']);
        this.tarjeta['fechaValidaHasta'] = new Date(data['fechaValidaHasta']);
      }, () => this.loading = false
    );
  }

  goBack() {
    this.router.navigateByUrl('/tarjetas');
  }

}
