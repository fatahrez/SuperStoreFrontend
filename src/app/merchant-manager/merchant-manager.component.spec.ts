import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantManagerComponent } from './merchant-manager.component';

describe('MerchantManagerComponent', () => {
  let component: MerchantManagerComponent;
  let fixture: ComponentFixture<MerchantManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
