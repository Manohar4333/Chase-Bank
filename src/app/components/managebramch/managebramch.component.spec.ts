import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagebramchComponent } from './managebramch.component';

describe('ManagebramchComponent', () => {
  let component: ManagebramchComponent;
  let fixture: ComponentFixture<ManagebramchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagebramchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagebramchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
