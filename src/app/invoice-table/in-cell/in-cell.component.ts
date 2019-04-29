import { Component, OnInit, Input } from '@angular/core';
import { Cell } from '../../cell';
import { FormControl ,Validators} from '@angular/forms';

@Component({
  selector: 'app-in-cell',
  templateUrl: './in-cell.component.html',
  styleUrls: ['./in-cell.component.css']
})
export class InCellComponent implements OnInit {

  @Input() cell :Cell;
  @Input() editing: boolean;

  newValueControl: FormControl;

  constructor() { }

  ngOnInit() {
    this.newValueControl = new FormControl(
      this.cell.newValue,
      [Validators.required,Validators.pattern(/[^a-zA-Z0-9_]/)]
    )
  }


}
