import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { AppComponent } from './app.component';
import { AppFooterComponent } from './core/components/app-footer/app-footer.component';
import { AppHeaderComponent } from './core/components/app-header/app-header.component';
import { AppMainComponent } from './core/components/app-main/app-main.component';
import { AppMenuComponent } from './core/components/app-menu/app-menu.component';
import { ThemingService } from './core/services/theming.service';
import { SharedTestingModule } from './shared/shared-testing.module';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedTestingModule],
      providers: [
        provideMockStore({ initialState: { theming: { darkMode: false, theme: 'blue-steel' } } }),
        ThemingService,
      ],
      declarations: [AppComponent, AppHeaderComponent, AppMenuComponent, AppMainComponent, AppFooterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy());

  it("should add the current theme's CSS class name to the bound DOM property", (done) => {
    component['themingService'].className$.subscribe((value) => {
      expect(component.classDomPropertyBinding).toEqual(value);
      done();
    });
  });

  it('should remove extra small screen height media query listener when destroyed', () => {
    const removeEventListenerSpy = jest.spyOn(
      component['themingService'].xsHeightMediaQueryList,
      'removeEventListener'
    );

    component.ngOnDestroy();

    expect(removeEventListenerSpy).toHaveBeenCalled();
  });
});
