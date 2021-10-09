import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { SharedModule } from '../shared/shared.module';

import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppMainComponent } from './components/app-main/app-main.component';
import { ROOT_REDUCERS, metaReducers } from './reducers';
import { ThemingService } from './services/theming/theming.service';

/**
 * Registers core application modules, components, & services.
 */
@NgModule({
  declarations: [AppComponent, AppHeaderComponent, AppMainComponent, AppFooterComponent],
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
    SharedModule,
  ],
  exports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, StoreModule, AppComponent],
})
export class CoreModule {}
