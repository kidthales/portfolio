import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { first } from 'rxjs/operators';

import { ThemingService } from '../../services/theming.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss'],
})
export class AppMenuComponent implements OnInit {
  /**
   * Dark mode theming control.
   */
  readonly darkModeControl = new FormControl();

  /**
   * Theme control.
   */
  readonly themeControl = new FormControl();

  /**
   * Theming dialog template reference.
   */
  @ViewChild('themingDialog') private themingDialogTemplate: TemplateRef<any> = undefined as any;

  /**
   * Flag for extra small screen height.
   */
  get xsHeight(): boolean {
    return this.themingService.xsHeightMediaQueryList.matches;
  }

  constructor(private readonly matDialog: MatDialog, private readonly themingService: ThemingService) {}

  ngOnInit(): void {
    this.initThemingControls();
  }

  openThemingDialog(): void {
    this.matDialog.open(this.themingDialogTemplate);
  }

  /**
   * Initialize application theming controls.
   */
  private initThemingControls(): this {
    const themeControl = this.themeControl;
    const darkModeControl = this.darkModeControl;
    const theming = this.themingService;

    themeControl.valueChanges.subscribe((value: string) => {
      if (value !== theming.theme) {
        theming.theme = value;
      }
    });

    theming.theme$.pipe(first((value) => !!value)).subscribe((value) => themeControl.setValue(value));

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
