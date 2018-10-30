import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { EstablecimientoService } from 'src/app/services/rest/establecimiento.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar-establecimientos',
  templateUrl: './modificar-establecimientos.component.html',
  styleUrls: ['./modificar-establecimientos.component.scss']
})
export class ModificarEstablecimientosComponent implements OnInit {
  startDate = new Date();

  formGroup: FormGroup;
  establecimiento: any;
  id: number;
  loading = false;

  constructor(private fb: FormBuilder, private rest: EstablecimientoService,
    private router: Router, private route: ActivatedRoute) {
    this.formGroup = this.fb.group({
      razonSocial: ['', [Validators.required]],
      domicilio: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.establecimientoId;
    this.loading = true;
    this.rest.getEstablecimiento(this.id).subscribe(
      (data) => { this.establecimiento = data; this.loading = false; },
      () => this.loading = false
    );
  }

  update() {
    if (!this.formGroup.valid)
      return;
    this.rest.updateEstablecimiento(this.id, this.establecimiento).subscribe(() => {
      this.router.navigateByUrl('/establecimientos');
      alert('Establecimiento actualizado!');
    }, () => { });
  }
}
