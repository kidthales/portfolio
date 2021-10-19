import { ThemingActions } from '../actions';

import * as fromReducer from './theming.reducer';

describe('ThemingReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const { initialState } = fromReducer;

      const action = {
        type: 'Unknown',
      };

      const state = fromReducer.reducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

  describe('set theme action', () => {
    it('should set the theme and update the state in an immutable way', () => {
      const { initialState } = fromReducer;

      const newState: fromReducer.State = { darkMode: false, theme: 'barney' };

      const action = ThemingActions.setTheme({ theme: 'barney' });
      const state = fromReducer.reducer(initialState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });
  });

  describe('activate dark mode action', () => {
    it('should activate dark mode and update the state in an immutable way', () => {
      const { initialState } = fromReducer;

      const newState: fromReducer.State = { darkMode: true, theme: 'blue-steel' };

      const action = ThemingActions.activateDarkMode();
      const state = fromReducer.reducer(initialState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });
  });

  describe('deactivate dark mode action', () => {
    it('should deactivate dark mode and update the state in an immutable way', () => {
      const { initialState } = fromReducer;

      const newState: fromReducer.State = { darkMode: false, theme: 'blue-steel' };

      const action = ThemingActions.deactivateDarkMode();
      const state = fromReducer.reducer(initialState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });
  });
});
