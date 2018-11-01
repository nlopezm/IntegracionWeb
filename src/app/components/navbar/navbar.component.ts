import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, ActivationEnd } from '@angular/router';
import { LiquidacionService } from '../../services/rest/liquidacion.service';
import { ConfirmDialogComponent } from 'src/app/components/dialogs/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  title = 'Entidad de Credito';
  abierto = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router,
    private liquidacionService: LiquidacionService, public dialog: MatDialog) {
    router.events.subscribe((val) => {
      if (val instanceof ActivationEnd)
        this.title = val.snapshot.data.title;
    }
    );
  }

  generarLiquidacion() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        titulo: 'Generar liquidaciones',
        descripcion: 'Estás seguro que querés forzar la generación de liquidaciones?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.liquidacionService.forzarLiquidaciones().subscribe(
          () => {
            alert('Liquidaciones creadas correctamente!');
          }, (e) => console.log(e)
        );
      }
    });

  }

}
