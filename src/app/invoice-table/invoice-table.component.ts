import { Component, OnInit, Input } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-invoice-table',
  templateUrl: './invoice-table.component.html',
  styleUrls: ['./invoice-table.component.css']
})
export class InvoiceTableComponent implements OnInit {

  @Input() source;
  @Input() settings ;

  data;

  constructor(private dataService : DataService) { }

  getData()
  {
    this.dataService.getData()
        .subscribe(data => this.data = data);

  }

  ngOnInit() {
    this.dataService.generatorData(this.source,this.settings);


    this.dataService.onChanged().subscribe(() => {
      this.getData();
        });

  }

}
