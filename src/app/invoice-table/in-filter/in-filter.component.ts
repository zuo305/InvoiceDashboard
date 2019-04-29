import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DataService } from './../../data.service';


@Component({
  selector: 'app-in-filter',
  templateUrl: './in-filter.component.html',
  styleUrls: ['./in-filter.component.css']
})
export class InFilterComponent implements OnInit {

  inputControl = new FormControl;
  delay: number = 300;

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.inputControl.valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(this.delay),
      )
      .subscribe((value: string) => {
        this.dataService.setFilter(this.inputControl.value)
      });
  }


}
