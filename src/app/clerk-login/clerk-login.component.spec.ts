import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClerkLoginComponent } from './clerk-login.component';

describe('ClerkLoginComponent', () => {
  let component: ClerkLoginComponent;
  let fixture: ComponentFixture<ClerkLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClerkLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClerkLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
