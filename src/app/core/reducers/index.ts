import { InjectionToken } from '@angular/core';
import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

import { environment } from '../../../environments/environment';

import * as fromTheming from './theming.reducer';

////////////////////////////////////////////////////////////////////////////////
// Application State (Core Features)
////////////////////////////////////////////////////////////////////////////////

/**
 * Application state. Composed from core feature states.
 */
export interface State {
  [fromTheming.themingFeatureKey]: fromTheming.State;
}

/**
 * Application state transition handler DI token. Composed from core feature state transition handlers.
 */
export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<State, Action>>('Root reducers token', {
  factory: () => ({
    [fromTheming.themingFeatureKey]: fromTheming.reducer,
  }),
});

////////////////////////////////////////////////////////////////////////////////
// Meta Reducers
////////////////////////////////////////////////////////////////////////////////

/**
 * Logs all actions to the console.
 *
 * @param reducer Application state transition handler.
 */
export function loggerReducer(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const result = reducer(state, action);

    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

/**
 * Synchronize application state with localstorage.
 *
 * @param reducer Application state transition handler.
 */
export function localStorageSyncReducer(reducer: ActionReducer<State>): ActionReducer<State> {
  return localStorageSync({ keys: [{ [fromTheming.themingFeatureKey]: ['darkMode'] }], rehydrate: true })(reducer);
}

/**
 * Ephemeral application state transition handlers.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [loggerReducer, localStorageSyncReducer]
  : [localStorageSyncReducer];

////////////////////////////////////////////////////////////////////////////////
// Selectors (Core Features)
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////
// Theming Selectors
////////////////////////////////////////

/**
 * Get theming state.
 */
export const selectThemingState = createFeatureSelector<fromTheming.State>(fromTheming.themingFeatureKey);

/**
 * Get dark mode flag state from theming state.
 */
export const selectDarkMode = createSelector(selectThemingState, fromTheming.selectDarkMode);

/**
 * Get theme name state from theming state.
 */
export const selectTheme = createSelector(selectThemingState, fromTheming.selectTheme);
