import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedButtonComponent } from './shared-button/shared-button.component';
import { ScreamPipe } from './scream.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SharedButtonComponent, ScreamPipe],
  declarations: [SharedButtonComponent, ScreamPipe]
})
export class SharedModule { }
