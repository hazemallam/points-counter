import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserslearnmoreComponent } from './userslearnmore.component';

describe('UserslearnmoreComponent', () => {
  let component: UserslearnmoreComponent;
  let fixture: ComponentFixture<UserslearnmoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserslearnmoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserslearnmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
