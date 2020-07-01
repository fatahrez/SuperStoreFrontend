import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClerkSalesComponent } from './clerk-sales.component';

describe('ClerkSalesComponent', () => {
  let component: ClerkSalesComponent;
  let fixture: ComponentFixture<ClerkSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClerkSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClerkSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
