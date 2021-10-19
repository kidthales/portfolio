import { trigger, state, style, animate, transition } from '@angular/animations';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ChangeDetectorRef, Component, HostBinding, OnDestroy, OnInit } from '@angular/core';

import { ThemingService } from './core/services/theming.service';

/**
 * Root application component.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('headerAnimation', [
      state('visible', style({ height: '*', transform: 'scaleY(1)' })),
      state('hidden', style({ height: '0', transform: 'scaleY(0)' })),
      transition('visible => hidden', animate('500ms 750ms ease-out')),
      transition('hidden => visible', animate('250ms 250ms ease-in')),
    ]),
    trigger('footerAnimation', [
      state('visible', style({ height: '*', transform: 'scaleY(1)' })),
      state('hidden', style({ height: '0', transform: 'scaleY(0)' })),
      transition('visible => hidden', animate('500ms 750ms ease-out')),
      transition('hidden => visible', animate('250ms 250ms ease-in')),
    ]),
    trigger('xsAppMenuFadeAnimation', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible => hidden', animate('250ms 250ms ease-in')),
      transition('hidden => visible', animate('500ms 750ms ease-out')),
    ]),
  ],
})
export class AppComponent implements OnDestroy, OnInit {
  /**
   * Extra small height change listener.
   */
  private readonly xsHeightMediaQueryListListener: () => void;

  /**
   * Binds to DOM 'class' property for this component. Used for theme support.
   */
  @HostBinding('class') classDomPropertyBinding = '';

  /**
   * Flag for extra small screen height.
   */
  get xsHeight(): boolean {
    return this.themingService.xsHeightMediaQueryList.matches;
  }

  /**
   * Instantiate application component.
   *
   * @param overlayContainer Material/CDK overlay container reference. Used for theme support.
   * @param themingService Provides current theming state.
   * @param changeDetectorRef View change detection.
   */
  constructor(
    private readonly overlayContainer: OverlayContainer,
    private readonly themingService: ThemingService,
    changeDetectorRef: ChangeDetectorRef
  ) {
    this.xsHeightMediaQueryListListener = () => changeDetectorRef.detectChanges();
  }

  ngOnInit(): void {
    this.initTheming().initListeners();
  }

  ngOnDestroy(): void {
    this.themingService.xsHeightMediaQueryList.removeEventListener('change', this.xsHeightMediaQueryListListener);
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

  /**
   * Initialize application root event listeners.
   */
  private initListeners(): this {
    this.themingService.xsHeightMediaQueryList.addEventListener('change', this.xsHeightMediaQueryListListener);
    return this;
  }
}
