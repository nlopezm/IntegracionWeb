import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearConsumoComponent } from './crear-consumo.component';

describe('CrearConsumoComponent', () => {
  let component: CrearConsumoComponent;
  let fixture: ComponentFixture<CrearConsumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearConsumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearConsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
