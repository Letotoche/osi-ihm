import { TestBed } from '@angular/core/testing';

import { EfaiServiceService } from './efai.service';

describe('EfaiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EfaiServiceService = TestBed.get(EfaiServiceService);
    expect(service).toBeTruthy();
  });
});
