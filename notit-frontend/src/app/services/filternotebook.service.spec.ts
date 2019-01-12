import { TestBed } from '@angular/core/testing';

import { FilternotebookService } from './filternotebook.service';

describe('FilternotebookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilternotebookService = TestBed.get(FilternotebookService);
    expect(service).toBeTruthy();
  });
});
