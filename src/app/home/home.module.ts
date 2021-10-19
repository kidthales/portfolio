import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { BusinessCardComponent } from './components/business-card/business-card.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, BusinessCardComponent],
  imports: [HomeRoutingModule, SharedModule],
})
export class HomeModule {}
