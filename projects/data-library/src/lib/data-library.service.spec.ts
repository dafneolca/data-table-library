import { TestBed } from '@angular/core/testing';

import { DataLibraryService } from './data-library.service';

describe('DataLibraryService', () => {
  let service: DataLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
