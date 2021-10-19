import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { SharedTestingModule } from '../../../shared/shared-testing.module';

import { ThemingService } from '../../services/theming.service';

import { AppMenuComponent } from '../app-menu/app-menu.component';

import { AppHeaderComponent } from './app-header.component';

describe('AppHeaderComponent', () => {
  let component: AppHeaderComponent;
  let fixture: ComponentFixture<AppHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedTestingModule],
      providers: [
        provideMockStore({ initialState: { router: undefined, theming: { darkMode: false, theme: 'blue-steel' } } }),
        ThemingService,
      ],
      declarations: [AppHeaderComponent, AppMenuComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy());

  it('should flag extra small screen height', () => expect(component.xsHeight).toBeFalsy());
});
