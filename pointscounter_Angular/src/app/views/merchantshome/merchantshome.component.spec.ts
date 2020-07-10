import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantshomeComponent } from './merchantshome.component';

describe('MerchantshomeComponent', () => {
  let component: MerchantshomeComponent;
  let fixture: ComponentFixture<MerchantshomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantshomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
