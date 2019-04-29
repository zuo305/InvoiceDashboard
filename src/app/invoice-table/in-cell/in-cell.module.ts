import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InCellComponent } from './in-cell.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [InCellComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[InCellComponent]
})
export class InCellModule { }
