import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceTableComponent } from './invoice-table.component';
import { InTbodyModule } from './in-tbody/in-tbody.module';
import { InTheadModule } from './in-thead/in-thead.module';
import { InPageModule } from './in-page/in-page.module';
import { InFilterModule } from './in-filter/in-filter.module';

@NgModule({
  declarations: [InvoiceTableComponent],
  imports: [
    CommonModule,
    InTbodyModule,
    InTheadModule,
    InPageModule,
    InFilterModule
  ],
  exports:[InvoiceTableComponent]
})
export class InvoiceTableModule { }
