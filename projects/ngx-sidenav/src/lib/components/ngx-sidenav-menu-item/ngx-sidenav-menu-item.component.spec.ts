import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSidenavMenuItemComponent } from './ngx-sidenav-menu-item.component';

describe('NgxSidenavMenuItemComponent', () => {
  let component: NgxSidenavMenuItemComponent;
  let fixture: ComponentFixture<NgxSidenavMenuItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxSidenavMenuItemComponent]
    });
    fixture = TestBed.createComponent(NgxSidenavMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
