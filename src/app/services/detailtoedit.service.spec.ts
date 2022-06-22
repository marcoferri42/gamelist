import { TestBed } from '@angular/core/testing';

import { DetailtoeditService } from './detailtoedit.service';

describe('DetailtoeditService', () => {
  let service: DetailtoeditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailtoeditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
