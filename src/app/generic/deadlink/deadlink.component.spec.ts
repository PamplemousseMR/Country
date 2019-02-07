import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadlinkComponent } from './deadlink.component';

describe('DeadlinkComponent', () => {
  let component: DeadlinkComponent;
  let fixture: ComponentFixture<DeadlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeadlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
