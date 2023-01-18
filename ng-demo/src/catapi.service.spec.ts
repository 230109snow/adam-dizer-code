import { TestBed } from '@angular/core/testing';

import { CatapiService } from './catapi.service';

describe('CatapiService', () => {
  let service: CatapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
