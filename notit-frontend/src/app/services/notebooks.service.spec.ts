import { TestBed } from '@angular/core/testing';

import { NotebooksService } from './notebooks.service';

describe('NotebooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotebooksService = TestBed.get(NotebooksService);
    expect(service).toBeTruthy();
  });
});
