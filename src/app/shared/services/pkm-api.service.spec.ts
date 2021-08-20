import { TestBed } from '@angular/core/testing';

import { PkmApiService } from './pkm-api.service';

describe('PkmApiService', () => {
  let service: PkmApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PkmApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
