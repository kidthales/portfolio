import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { ThemingService } from '../../services/theming.service';

import { SharedTestingModule } from '../../../shared/shared-testing.module';

import { AppMenuComponent } from './app-menu.component';

describe('AppMenuComponent', () => {
  let component: AppMenuComponent;
  let fixture: ComponentFixture<AppMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedTestingModule],
      providers: [
        provideMockStore({ initialState: { theming: { darkMode: false, theme: 'blue-steel' } } }),
        ThemingService,
      ],
      declarations: [AppMenuComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy());

  it('should open theming dialog', () => {
    const matDialogOpenSpy = jest.spyOn(component['matDialog'], 'open');

    component.openThemingDialog();

    expect(matDialogOpenSpy).toHaveBeenCalled();
  });
});
