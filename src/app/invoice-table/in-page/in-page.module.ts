import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InPageComponent } from './in-page.component';

@NgModule({
  declarations: [InPageComponent],
  imports: [
    CommonModule
  ],
  exports:[InPageComponent]
})
export class InPageModule { }
