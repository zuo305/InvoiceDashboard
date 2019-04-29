import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { Row } from 'src/app/row';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-in-add',
  templateUrl: './in-add.component.html',
  styleUrls: ['./in-add.component.css']
})
export class InAddComponent implements OnInit {

  row : Row;
  adding : boolean = false;

  @Output() newRow = new EventEmitter();

  constructor(private dataService:DataService) { }

  getNewRow(){
    this.row=this.dataService.getNewRow();
    this.newRow.emit(this.row);
  }

  ngOnInit() {
  }

  create(){
    this.getNewRow();
    this.adding = true;
  }

  cancel(){
    this.adding = false;
    this.row = null;
    this.newRow.emit(this.row);
  }

  save(){
    if(this.dataService.createRow(this.row))
    {
      this.adding = false;
      this.row = null;
      this.newRow.emit(this.row);
    }
  }

}
