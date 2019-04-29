import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InTheadComponent } from './in-thead.component';
import { InTitleComponent } from './in-title/in-title.component';
import { InAddComponent } from './in-add/in-add.component';
import { InCellModule } from '../in-cell/in-cell.module';

@NgModule({
  declarations: [InTheadComponent, InTitleComponent, InAddComponent],
  imports: [
    CommonModule,
    InCellModule
  ],
  exports:[InTheadComponent]
})
export class InTheadModule { }
