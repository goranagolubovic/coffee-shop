import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountPickerComponent } from './amount-picker.component';

describe('AmountPickerComponent', () => {
  let component: AmountPickerComponent;
  let fixture: ComponentFixture<AmountPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
