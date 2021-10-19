import { createAction, props } from '@ngrx/store';

export const setTheme = createAction('[Theming] Set Theme', props<{ theme: string }>());

export const activateDarkMode = createAction('[Theming] Activate Dark Mode');
export const deactivateDarkMode = createAction('[Theming] Deactivate Dark Mode');
