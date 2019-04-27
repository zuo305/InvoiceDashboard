import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data = [];
  settings : Object ;

  constructor(private dataService : DataService) { }


  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.dataService.getInvoices()
        .subscribe(invoices => this.data = invoices);

   this.dataService.getSetting()
        .subscribe(settings => this.settings = settings);
  }

}
