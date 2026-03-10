import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewecustomerComponent } from './viewecustomer.component';

describe('ViewecustomerComponent', () => {
  let component: ViewecustomerComponent;
  let fixture: ComponentFixture<ViewecustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewecustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewecustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
