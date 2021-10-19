import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './modules/material/material.module';

const modules = [CommonModule, FlexLayoutModule, HttpClientModule, MaterialModule, ReactiveFormsModule];

/**
 * Bundles modules & components that can be shared with other application & feature modules.
 */
@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class SharedModule {}
