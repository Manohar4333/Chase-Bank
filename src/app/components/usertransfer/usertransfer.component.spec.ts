import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertransferComponent } from './usertransfer.component';

describe('UsertransferComponent', () => {
  let component: UsertransferComponent;
  let fixture: ComponentFixture<UsertransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsertransferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsertransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
