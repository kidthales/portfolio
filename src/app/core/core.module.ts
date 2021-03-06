import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../../environments/environment';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { SharedModule } from '../shared/shared.module';

import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppMainComponent } from './components/app-main/app-main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppEffects } from './effects/app.effects';
import { ROOT_REDUCERS, metaReducers } from './reducers';
import { ThemingService } from './services/theming.service';
import { AppMenuComponent } from './components/app-menu/app-menu.component';

/**
 * Registers core application modules, components, & services.
 */
@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppMenuComponent,
    AppMainComponent,
    AppFooterComponent,
    NotFoundComponent,
  ],
  providers: [ThemingService],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    }),
    StoreRouterConnectingModule.forRoot(),
    environment.production ? [] : StoreDevtoolsModule.instrument({ name: 'Portfolio', maxAge: 25 }),
    EffectsModule.forRoot([AppEffects]),
    SharedModule,
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule,
    StoreRouterConnectingModule,
    environment.production ? [] : StoreDevtoolsModule,
    EffectsModule,
    AppComponent,
  ],
})
export class CoreModule {}
