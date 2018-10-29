import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


export interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent{
  productos = new FormControl();
 
  productosList: string[] = ['39048329473242374', '984127412471','7381267438129367'];

  startDate = new Date(1940, 0, 1);
}
