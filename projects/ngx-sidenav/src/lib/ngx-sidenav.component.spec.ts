import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSidenavComponent } from './ngx-sidenav.component';

describe('NgxSidenavComponent', () => {
  let component: NgxSidenavComponent;
  let fixture: ComponentFixture<NgxSidenavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxSidenavComponent]
    });
    fixture = TestBed.createComponent(NgxSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
