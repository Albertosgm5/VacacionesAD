import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarTrabajadorComponent } from './borrar-trabajador.component';

describe('BorrarTrabajadorComponent', () => {
  let component: BorrarTrabajadorComponent;
  let fixture: ComponentFixture<BorrarTrabajadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarTrabajadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
