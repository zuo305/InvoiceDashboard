import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InFilterComponent } from './in-filter.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [InFilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[InFilterComponent]
})
export class InFilterModule { }
