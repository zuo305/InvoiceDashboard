import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InTbodyComponent } from './in-tbody.component';
import { InEditDeleteComponent } from './in-edit-delete/in-edit-delete.component';
import { FormsModule } from '@angular/forms';
import { InCellModule } from './../in-cell/in-cell.module';



@NgModule({
  declarations: [InTbodyComponent, InEditDeleteComponent],
  imports: [
    CommonModule,
    FormsModule,
    InCellModule
  ],
  exports:[InTbodyComponent]
})
export class InTbodyModule { }
