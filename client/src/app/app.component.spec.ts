import { ComponentFixture, TestBed } from '@angular/core/testing';

import {AppComponent} from './app.component';

describe('ForecastComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ]
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
