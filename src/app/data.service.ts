import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Row } from './row'
import { BehaviorSubject } from 'rxjs';
import { Cell } from './cell';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data :Row[]=[];
  settings;

  pageSetting = {prePage:10,pageIndex:0,pages:0}
  sortCondition = {index:0,dir:'desc'}

  filterWords = {words:''}

  private changeData = new BehaviorSubject('');
  private sortSwitch = new BehaviorSubject('');

  constructor() {
  }

  getData(): Observable<any[]> {
    let data = this.filter();
    data = this.sort(data);
    this.setPages(data);
    let pageData = this.paginate(data);
    return of(pageData);
  }


  generatorData(source,settings){
    this.settings = settings;
    source.forEach(x=>{
      let row = new Row();
      row.cells=[];
      for(let key in this.settings.columns)
      {
        if(this.settings.columns[key].title.length>0)
        {
          let cell = new Cell();
          cell.type = this.settings.columns[key].type;
          if(cell.type==='date')
          {
            cell.value = new Date(x[key]);
          }
          else
          {
            cell.value = x[key];
          }

          cell.editable = this.settings.columns[key].editable;
          row.cells.push(cell);
          this.settings.columns[key]['index']=row.cells.length-1;
        }
      }
      this.data.push(row);
    })
  }

  //filter
  filter(){
    return this.data.filter( x=> {
      return x.cells[2].value.indexOf(this.filterWords.words)>=0
    })
  }

  setFilter(words){
    this.filterWords.words = words;
    this.emitChanged('');
  }

  //page /////
  getPagesSetting(){
    return this.pageSetting;
  }

  setPages(data){
    this.pageSetting.pages = Math.ceil(data.length/this.pageSetting.prePage);
    if(this.pageSetting.pageIndex>=this.pageSetting.pages)
    {
      this.pageSetting.pageIndex = this.pageSetting.pages-1;
    }
  }

  setPageIndex(index){
    this.pageSetting.pageIndex=index;
    this.emitChanged('');
  }

  private paginate(data){
    let index = this.pageSetting.pageIndex*this.pageSetting.prePage;
    return data.slice(index,index+this.pageSetting.prePage);
  }


  //change observe
  onChanged(): Observable<any> {
    return this.changeData.asObservable();
  }

  private emitChanged(value) {
    this.changeData.next(value);
  }

  onSortSwitch() : Observable<any>{
    return this.sortSwitch.asObservable();
  }

  private emitSortSwitch(type){
    this.sortSwitch.next(type);
  }


  //validation
  validate(row){
    var regex = RegExp('^[a-zA-Z0-9]+$');
    for(let key in this.settings.columns)
    {
      if(this.settings.columns[key].title.length>0)
      {
        let cell = row.cells[this.settings.columns[key].index];
        if(cell.type=='string')
        {
           if(!regex.test(cell.newValue))
           {
              cell.errorMessage= 'Only text or numbers!'
              return false;
           }
        }
      }
    }
    return true;
  }

  //delete
  deleteRow(row : Row){
    let index = this.data.indexOf(row);
    this.data.splice(index,1);
    this.emitChanged('');
  }

  //add
  createRow(row){
    if(this.validate(row)==false)
      return false;


    row.cells.map(x=>{
      x.value = x.newValue;
      x.newValue = null;
      x.errorMessage= null;
    })
    row.isEditing = false;
    this.data.unshift(row);
    this.emitChanged('');
    return true;
  }

  getNewRow() : Row{
    let row = new Row();
    row.isEditing = true;
    row.cells = [];
    for(let key in this.settings.columns)
    {
      if(this.settings.columns[key].title.length>0)
      {
        let cell = new Cell();
        cell.type = this.settings.columns[key].type;
        if(cell.type==='idstring')
        {
          cell.value = this.data.length+1;
        }
        else if(cell.type==='date'){
          cell.value = new Date();
        }
        else
        {
          cell.value = '';
        }

        cell.newValue= cell.value;
        cell.editable = this.settings.columns[key].editable;
        row.cells.push(cell);
      }
    }

    return row;
  }

  //edit
  editRow(row : Row){
    row.cells.map(x=>x.newValue= x.value)
    row.isEditing = true;
  }

  cancelEdit(row:Row){
    row.cells.map(x=>{
      x.newValue = null;
      x.errorMessage= null;
    })
    row.isEditing = false;
  }

  saveEdit(row:Row){
    if(this.validate(row)==false)
      return false;

    row.cells.map(x=>{
      x.value = x.newValue;
      x.newValue = null;
      x.errorMessage= null;
    })
    row.isEditing = false;
    return true;
  }

  //sort
  setSortCondition(item,sortDir){
    this.sortCondition.dir =sortDir;
    this.sortCondition.index = item.value.index;

    this.emitSortSwitch(item.key);
    this.emitChanged('');
  }

  sort(data)
  {
    const dir: boolean = (this.sortCondition.dir === 'asc') ? true : false;
    data.sort((x,y)=> {
      if((x.cells[this.sortCondition.index].value<y.cells[this.sortCondition.index].value)!=dir)
        return 1;
      else
        return -1;
    })
    return data;
  }
}
