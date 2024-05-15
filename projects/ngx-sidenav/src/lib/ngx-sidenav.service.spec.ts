import { TestBed } from '@angular/core/testing';

import { NgxSidenavService } from './ngx-sidenav.service';

describe('NgxSidenavService', () => {
  let service: NgxSidenavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSidenavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
