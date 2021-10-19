import { createReducer, on } from '@ngrx/store';

import { ThemingActions } from '../actions';

////////////////////////////////////////////////////////////////////////////////
// Feature State
////////////////////////////////////////////////////////////////////////////////

/**
 * Application theming feature key.
 */
export const themingFeatureKey = 'theming';

/**
 * Theming feature state.
 */
export interface State {
  darkMode: boolean;
  theme: string;
}

/**
 * Initial theming feature state.
 */
export const initialState: State = {
  darkMode: false,
  theme: 'blue-steel',
};

/**
 * Theming feature state transition handler.
 */
export const reducer = createReducer(
  initialState,
  on(ThemingActions.setTheme, (state, { theme }): State => ({ ...state, theme })),
  on(ThemingActions.activateDarkMode, (state): State => ({ ...state, darkMode: true })),
  on(ThemingActions.deactivateDarkMode, (state): State => ({ ...state, darkMode: false }))
);

////////////////////////////////////////////////////////////////////////////////
// Feature Selectors
////////////////////////////////////////////////////////////////////////////////

/**
 * Get dark mode flag state.
 *
 * @param state Theming feature state.
 */
export const selectDarkMode = (state: State) => state.darkMode;

/**
 * Get theme name state.
 *
 * @param state Theming feature state.
 */
export const selectTheme = (state: State) => state.theme;
