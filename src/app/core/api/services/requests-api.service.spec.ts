import { TestBed } from '@angular/core/testing';

import { RequestsApiService } from './requests-api.service';

describe('RequestsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestsApiService = TestBed.get(RequestsApiService);
    expect(service).toBeTruthy();
  });
});
