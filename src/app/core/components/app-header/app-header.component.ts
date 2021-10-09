import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { ThemingService } from '../../services/theming/theming.service';

/**
 * Application header component.
 */
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  /**
   * Dark mode theming control.
   */
  readonly darkModeControl = new FormControl();

  /**
   * Instantiate application header component.
   *
   * @param themingService Provides read/write access to theming state.
   */
  constructor(private readonly themingService: ThemingService) {}

  ngOnInit(): void {
    this.initThemingControls();
  }

  /**
   * Initialize application theming controls.
   */
  private initThemingControls(): this {
    const darkModeControl = this.darkModeControl;
    const theming = this.themingService;

    // Update dark mode state on control toggle.
    darkModeControl.valueChanges.subscribe((value: boolean) => {
      if (value !== theming.darkMode) {
        theming.darkMode = value;
      }
    });

    // Set dark mode control to match initial dark mode state.
    theming.darkMode$.pipe(first((value) => value !== undefined)).subscribe((value) => darkModeControl.setValue(value));

    return this;
  }
}
