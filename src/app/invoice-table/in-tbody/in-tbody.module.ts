import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InCellComponent } from './in-cell/in-cell.component';
import { InTbodyComponent } from './in-tbody.component';
import { InEditDeleteComponent } from './in-edit-delete/in-edit-delete.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [InTbodyComponent,InCellComponent, InEditDeleteComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[InTbodyComponent]
})
export class InTbodyModule { }
