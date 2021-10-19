import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedTestingModule } from '../../../shared/shared-testing.module';

import { AppMainComponent } from './app-main.component';

describe('AppMainComponent', () => {
  let component: AppMainComponent;
  let fixture: ComponentFixture<AppMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedTestingModule],
      declarations: [AppMainComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy());
});
