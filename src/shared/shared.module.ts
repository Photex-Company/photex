import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/materials/material/material.module';
import { FileDropDirective } from './directives/file-drop.directive';
import { AppPasswordDirective } from './directives/app-password.directive';



@NgModule({
  declarations: [
    AppPasswordDirective,
    FileDropDirective,
    AppPasswordDirective
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    FileDropDirective,
    AppPasswordDirective
  ]
})
export class SharedModule { }
