import { Component, OnInit, Input} from '@angular/core';
import {  DataService} from '../../../data.service';
import { Row } from 'src/app/row';

@Component({
  selector: 'app-in-edit-delete',
  templateUrl: './in-edit-delete.component.html',
  styleUrls: ['./in-edit-delete.component.css']
})
export class InEditDeleteComponent implements OnInit {

  @Input() row;


  editing : boolean = false;

  constructor(private dataService : DataService) { }

  ngOnInit() {
  }

  delete() {
    this.dataService.deleteRow(this.row);
  }

  edit(){
    this.editing = true;
    this.dataService.editRow(this.row);
  }

  done(){
    this.editing = false;
    this.dataService.cancelEdit(this.row);
  }
}
