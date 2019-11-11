import { TestBed } from '@angular/core/testing';

import { UserDataResolverService } from './user-data-resolver.service';

describe('UserDataResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserDataResolverService = TestBed.get(UserDataResolverService);
    expect(service).toBeTruthy();
  });
});
