import { Component, OnInit, Input } from '@angular/core';
import { DataService } from './../../data.service';

@Component({
  selector: '[app-in-tbody]',
  templateUrl: './in-tbody.component.html',
  styleUrls: ['./in-tbody.component.css']
})
export class InTbodyComponent implements OnInit {

  @Input() data : any;

  constructor(private dataService : DataService) {

  }

  ngOnInit() {

  }

  keyDescOrder = (a, b): number => {
    return 1;
  }


}
