import { TestBed } from '@angular/core/testing';

import { TrabajadorServiceService } from './trabajador-service.service';

describe('TrabajadorServiceService', () => {
  let service: TrabajadorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrabajadorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
