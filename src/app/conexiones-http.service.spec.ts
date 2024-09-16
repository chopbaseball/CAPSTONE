import { TestBed } from '@angular/core/testing';

import { ConexionesHttpService } from './conexiones-http.service';

describe('ConexionesHttpService', () => {
  let service: ConexionesHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConexionesHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
