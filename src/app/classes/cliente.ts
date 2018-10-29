import { Producto } from './producto';
import { Consumo } from './consumo';
export class Cliente {
  id: number;
  nombre: string;
  apellido: string;
  documento_tipo: string;
  documento_numero: string;
  productos: Producto[];
  fecha_nac: string;

}

