import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaTrabajadoresComponent } from './alta-trabajadores.component';

describe('AltaTrabajadoresComponent', () => {
  let component: AltaTrabajadoresComponent;
  let fixture: ComponentFixture<AltaTrabajadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaTrabajadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaTrabajadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
