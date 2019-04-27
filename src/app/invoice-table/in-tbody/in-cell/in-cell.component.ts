import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-in-cell',
  templateUrl: './in-cell.component.html',
  styleUrls: ['./in-cell.component.css']
})
export class InCellComponent implements OnInit {

  @Input() cell :any;
  @Input() editing: boolean;

  constructor() { }

  ngOnInit() {
  }

}
