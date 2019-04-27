import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-invoice-table',
  templateUrl: './invoice-table.component.html',
  styleUrls: ['./invoice-table.component.css']
})
export class InvoiceTableComponent implements OnInit {

  @Input() data: any;
  @Input() settings: Object ;

  constructor() { }

  ngOnInit() {
  }

}
