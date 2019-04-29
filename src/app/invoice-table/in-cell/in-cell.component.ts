import { Component, OnInit, Input } from '@angular/core';
import { Cell } from '../../cell';

@Component({
  selector: 'app-in-cell',
  templateUrl: './in-cell.component.html',
  styleUrls: ['./in-cell.component.css']
})
export class InCellComponent implements OnInit {

  @Input() cell :Cell;
  @Input() editing: boolean;


  constructor() { }

  ngOnInit() {
  }


}
