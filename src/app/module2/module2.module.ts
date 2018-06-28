import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component2Component } from './component2/component2.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [Component2Component],
  declarations: [Component2Component]
})
export class Module2Module { }
