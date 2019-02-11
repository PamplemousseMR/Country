import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DeadlinkViewComponent} from './deadlink-view.component';

describe('DeadlinkViewComponent', () => {
  let component: DeadlinkViewComponent;
  let fixture: ComponentFixture<DeadlinkViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeadlinkViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadlinkViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
