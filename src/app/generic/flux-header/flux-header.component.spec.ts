import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FluxHeaderComponent} from './flux-header.component';

describe('FluxHeaderComponent', () => {
  let component: FluxHeaderComponent;
  let fixture: ComponentFixture<FluxHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FluxHeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
