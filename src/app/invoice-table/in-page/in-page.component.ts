import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-in-page',
  templateUrl: './in-page.component.html',
  styleUrls: ['./in-page.component.css']
})
export class InPageComponent implements OnInit {

  pagesetting;

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.pagesetting = this.dataService.getPagesSetting();
  }

  getPage(){
    return this.pagesetting.pageIndex;
  }

  arrayOne(n: number): any[] {
    return Array(n);
  }

  selectPageItem(index){
    this.dataService.setPageIndex(index);
  }

}
