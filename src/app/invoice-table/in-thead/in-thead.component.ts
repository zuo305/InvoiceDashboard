import { Component, OnInit, Input } from '@angular/core';
import { Row } from 'src/app/row';
import { DataService } from '../../data.service';

@Component({
  selector: '[app-in-thead]',
  templateUrl: './in-thead.component.html',
  styleUrls: ['./in-thead.component.css']
})
export class InTheadComponent implements OnInit {

  @Input() settings: any;

  row : Row;

  constructor() {
  }

  ngOnInit() {
  }

  newRow(e){
    this.row=e;
  }


  keyDescOrder = (a, b): number => {
    return 1;
  }
}
