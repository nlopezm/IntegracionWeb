import { Cliente } from './cliente';
export class Tarjeta {
  nroTarjeta: number;
  codigoSeguridad: string;
  fechaValidoDesde: Date;
  fechaValidoHasta: Date;
  fechaCierre: Date;
  cliente: Cliente[];
  estado: boolean;
  categoria: string;
  montoLimite: number;
}   