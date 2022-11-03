import { ComponentFixture, TestBed } from '@angular/core/testing';

import {UserProfileComponent} from './user-profile.component';

describe('ForecastComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileComponent ]
    })
      .compileComponents();

    // fixture = TestBed.createComponent(ForecastComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    // expect(component).toBeTruthy();
  });
});
