import { TestBed } from '@angular/core/testing';

import { ExpeService } from './expe.service';

describe('ExpeService', () => {
  let service: ExpeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
