import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeFormComponent } from './real-time-form.component';

describe('RealTimeFormComponent', () => {
  let component: RealTimeFormComponent;
  let fixture: ComponentFixture<RealTimeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealTimeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealTimeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
