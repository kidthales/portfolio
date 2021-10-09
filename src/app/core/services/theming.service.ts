import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ThemingActions } from '../actions';
import { selectDarkMode, selectTheme, selectThemingState } from '../reducers';
import { initialState, State } from '../reducers/theming.reducer';

/**
 * Provides API to the application theming core feature state.
 */
@Injectable({
  providedIn: 'root',
})
export class ThemingService {
  /**
   * Construct CSS class name of form '<theme>-(dark|light)-theme'.
   *
   * @param theme Theme name.
   * @param darkMode Dark mode flag.
   */
  private static makeClassName(theme: string, darkMode: boolean): string {
    return `${theme}-${darkMode ? 'dark' : 'light'}-theme`;
  }

  /**
   * CSS class name stream.
   */
  readonly className$: Observable<string>;

  /**
   * Dark mode flag stream.
   */
  readonly darkMode$ = this.store.select(selectDarkMode);

  /**
   * Theme name stream.
   */
  readonly theme$ = this.store.select(selectTheme);

  /**
   * Maintains direct access to current state values.
   */
  private readonly state$ = new BehaviorSubject<State>(initialState);

  /**
   * Current CSS class name.
   */
  get className(): string {
    return ThemingService.makeClassName(this.theme, this.darkMode);
  }

  /**
   * Dark mode flag for current theme.
   */
  get darkMode(): boolean {
    return this.state$.value.darkMode;
  }
  set darkMode(value: boolean) {
    this.store.dispatch(value ? ThemingActions.activateDarkMode() : ThemingActions.deactivateDarkMode());
  }

  /**
   * Current theme name.
   */
  get theme(): string {
    return this.state$.value.theme;
  }

  /**
   * Instantiate theming service.
   *
   * @param store Application state store.
   */
  constructor(private readonly store: Store) {
    this.className$ = combineLatest([this.darkMode$, this.theme$]).pipe(
      map(([darkMode, theme]) => ThemingService.makeClassName(theme, darkMode))
    );

    // eslint-disable-next-line ngrx/no-store-subscription
    store.select(selectThemingState).subscribe(this.state$);
  }
}
