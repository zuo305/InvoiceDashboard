import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-in-thead]',
  templateUrl: './in-thead.component.html',
  styleUrls: ['./in-thead.component.css']
})
export class InTheadComponent implements OnInit {

  @Input() settings: any;

  constructor() { }

  ngOnInit() {
    for(let key in this.settings.columns){
      console.log(key);
      console.log(this.settings.columns[key].title)
    }
  }

  keyDescOrder = (a, b): number => {
    return 1;
  }
}
