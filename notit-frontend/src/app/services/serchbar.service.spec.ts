import { TestBed } from '@angular/core/testing';

import { SerchbarService } from './serchbar.service';

describe('SerchbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SerchbarService = TestBed.get(SerchbarService);
    expect(service).toBeTruthy();
  });
});
