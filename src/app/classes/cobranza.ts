import { Cliente } from './cliente';
import { Consumo } from './consumo';
export class Cobranza {
  id: number;
  fecha: Date;
  cliente: Cliente;
  consumo: Consumo;
}
