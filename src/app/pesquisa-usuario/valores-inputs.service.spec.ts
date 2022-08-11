import { TestBed } from '@angular/core/testing';

import { ValoresInputsService } from './ValoresInputsService';

describe('ValoresInputsService', () => {
  let service: ValoresInputsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValoresInputsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
