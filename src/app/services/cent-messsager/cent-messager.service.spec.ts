import { TestBed } from '@angular/core/testing';

import { CentMessagerService } from './cent-messager.service';

describe('CentMessagerService', () => {
  let service: CentMessagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentMessagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
