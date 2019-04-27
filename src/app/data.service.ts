import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Row } from './row'
import { InvoicesData ,Settings} from './mock-data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data :Row[]=[];

  pageSetting = {prePage:10,pageIndex:0,pages:0}

  private changeSort = new BehaviorSubject('default message');


  constructor() {
    InvoicesData.forEach(x=>{
      let row = new Row();
      row.data =x;
      this.data.push(row);
    })
  }

  getPages(){
    return this.pageSetting;
  }

  setPages(){
    this.pageSetting.pages = Math.ceil(this.data.length/this.pageSetting.prePage);
  }

  setPageIndex(index){
    this.pageSetting.pageIndex=index;
  }

  onSortChanged(): Observable<any> {
    return this.changeSort.asObservable();
  }

  private emitSortChanged(type) {
    this.changeSort.next(type);
  }

  private paginate(){
    let index = this.pageSetting.pageIndex*this.pageSetting.prePage;
    return this.data.slice(index,index+this.pageSetting.prePage);
  }

  getInvoices(): Observable<Row[]> {
    // TODO: send the message _after_ fetching the heroes
    let data = this.paginate();
    this.setPages();
    return of(data);
  }

  getSetting(): Observable<any> {
    // TODO: send the message _after_ fetching the heroes
    return of(Settings);
  }

  deleteRow(row : Row){
    let index = this.data.indexOf(row);
    this.data.splice(index,1);
  }

  editRow(row : Row){
    row.isEditing = true;
  }

  cancelEdit(row:Row){
    row.isEditing = false;
  }

  sort(item,sortDir){
    const dir: boolean = (sortDir === 'asc') ? true : false;
    this.data.sort((x,y)=> {
      if((x.data[item.key]<y.data[item.key])!=dir)
        return 1;
      else
        return -1;
    })

    this.emitSortChanged(item.key);
  }
}
