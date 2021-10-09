import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

/**
 * Root application module that bootstraps the root application component.
 */
@NgModule({
  imports: [CoreModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
