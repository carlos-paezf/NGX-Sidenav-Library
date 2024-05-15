import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSidenavPanelComponent } from './ngx-sidenav-panel.component';

describe('NgxSidenavPanelComponent', () => {
  let component: NgxSidenavPanelComponent;
  let fixture: ComponentFixture<NgxSidenavPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxSidenavPanelComponent]
    });
    fixture = TestBed.createComponent(NgxSidenavPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
