import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClerkOrderComponent } from './clerk-order.component';

describe('ClerkOrderComponent', () => {
  let component: ClerkOrderComponent;
  let fixture: ComponentFixture<ClerkOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClerkOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClerkOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
