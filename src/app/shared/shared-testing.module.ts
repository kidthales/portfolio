import { NgModule } from '@angular/core';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { SharedModule } from './shared.module';

const modules = [SharedModule, RouterTestingModule, NoopAnimationsModule, MatIconTestingModule];

@NgModule({
  imports: [...modules],
  exports: [...modules],
  providers: [{ provide: MATERIAL_SANITY_CHECKS, useValue: false }],
})
export class SharedTestingModule {}
