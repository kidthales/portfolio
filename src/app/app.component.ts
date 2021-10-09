import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';

import { ThemingService } from './core/services/theming.service';

/**
 * Root application component.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  /**
   * Binds to DOM 'class' property for this component. Used for theme support.
   */
  @HostBinding('class') classDomPropertyBinding = '';

  /**
   * Instantiate application component.
   *
   * @param overlayContainer Material/CDK overlay container reference. Used for theme support.
   * @param themingService Provides current theming state.
   */
  constructor(private readonly overlayContainer: OverlayContainer, private readonly themingService: ThemingService) {}

  ngOnInit(): void {
    this.initTheming();
  }

  /**
   * Initialize application theming.
   */
  private initTheming(): this {
    let currentClassName = '';

    this.themingService.className$.subscribe((value) => {
      this.classDomPropertyBinding = value;

      const overlyClassList = this.overlayContainer.getContainerElement().classList;

      if (currentClassName) {
        overlyClassList.remove(currentClassName);
      }

      overlyClassList.add(value);

      currentClassName = value;
    });

    return this;
  }
}
