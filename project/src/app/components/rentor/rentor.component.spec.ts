import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentorComponent } from './rentor.component';

describe('RentorComponent', () => {
  let component: RentorComponent;
  let fixture: ComponentFixture<RentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
