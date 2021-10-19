import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { ThemingService } from '../../../core/services/theming.service';
import { SharedTestingModule } from '../../../shared/shared-testing.module';

import { BusinessCardComponent } from './business-card.component';

describe('BusinessCardComponent', () => {
  let component: BusinessCardComponent;
  let fixture: ComponentFixture<BusinessCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedTestingModule],
      providers: [
        provideMockStore({ initialState: { router: undefined, theming: { darkMode: false, theme: 'blue-steel' } } }),
        ThemingService,
      ],
      declarations: [BusinessCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy());

  it('should open topic details dialogs', () => {
    const matDialogOpenSpy = jest.spyOn(component['matDialog'], 'open');

    component.openTopic1Details();
    component.openTopic2Details();
    component.openTopic3Details();

    expect(matDialogOpenSpy).toHaveBeenCalledTimes(3);
  });
});
