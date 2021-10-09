import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './modules/material/material.module';

const modules = [CommonModule, FlexLayoutModule, MaterialModule, ReactiveFormsModule];

/**
 * Bundles modules & components that can be shared with other application & feature modules.
 */
@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
})
export class SharedModule {}
