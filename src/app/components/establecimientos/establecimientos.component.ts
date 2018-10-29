import { Component} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-establecimientos',
  templateUrl: './establecimientos.component.html',
  styleUrls: ['./establecimientos.component.scss']
})
export class EstablecimientosComponent {

  productos = new FormControl();
 
  productosList: string[] = ['39048329473242374', '984127412471','7381267438129367'];

  startDate = new Date(1920, 0, 1);

}
