import { TestBed } from '@angular/core/testing';

import { MenuSService } from './menu-s.service';

describe('MenuSService', () => {
  let service: MenuSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
