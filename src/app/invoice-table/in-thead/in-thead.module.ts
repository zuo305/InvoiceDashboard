import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InTheadComponent } from './in-thead.component';
import { InTitleComponent } from './in-title/in-title.component';

@NgModule({
  declarations: [InTheadComponent, InTitleComponent],
  imports: [
    CommonModule
  ],
  exports:[InTheadComponent]
})
export class InTheadModule { }
