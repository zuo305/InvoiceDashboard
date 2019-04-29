import { Component, OnInit } from '@angular/core';
import { SourceService } from './../source.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  source;
  settings;

  constructor(private sourceService : SourceService) {}

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.sourceService.getInvoices()
        .subscribe(source => this.source = source);

   this.sourceService.getSetting()
        .subscribe(settings => this.settings = settings);
  }

}
