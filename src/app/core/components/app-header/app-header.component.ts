import { Component } from '@angular/core';

import { ThemingService } from '../../services/theming.service';

/**
 * Application header component.
 */
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent {
  /**
   * Flag for extra small screen height.
   */
  get xsHeight(): boolean {
    return this.themingService.xsHeightMediaQueryList.matches;
  }

  /**
   * Instantiate application header component.
   *
   * @param themingService Provides read/write access to theming state.
   */
  constructor(private readonly themingService: ThemingService) {}
}
