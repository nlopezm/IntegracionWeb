import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ClienteService } from 'src/app/services/rest/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.component.html',
  styleUrls: ['./modificar-cliente.component.scss']
})
export class ModificarClienteComponent implements OnInit {

  startDate = new Date();
  cliente: any;
  formGroup: FormGroup;
  clienteId: number;
  loading = false;

  constructor(private fb: FormBuilder, private rest: ClienteService,
    private route: ActivatedRoute, private router: Router) {
    this.formGroup = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
    });
    this.clienteId = this.route.snapshot.params.clienteId;

  }

  ngOnInit(): void {
    this.loading = true;
    this.rest.getCliente(this.clienteId).subscribe(
      (data) => { this.cliente = data; this.loading = false; },
      () => { this.loading = false; }
    );
  }

  update() {
    if (!this.formGroup.valid)
      return;
    this.rest.updateCliente(this.clienteId, this.cliente).subscribe(() => {
      this.router.navigateByUrl('/clientes');
      alert('Cliente actualizado!');
    }, () => { });
  }

}
