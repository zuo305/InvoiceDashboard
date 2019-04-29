import { Component,  Input , OnInit} from '@angular/core';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-in-title',
  templateUrl: './in-title.component.html',
  styleUrls: ['./in-title.component.css']
})
export class InTitleComponent implements OnInit {

  @Input() item;

  currentSort = '';

  constructor(private dataService : DataService) { }



  ngOnInit() {
      this.dataService.onSortSwitch().subscribe((key) => {
        if (key === this.item.key) {
        } else {
          this.currentSort = '';
        }
      });
  }

  changeSortDirect(){
    if(this.currentSort==='')
    {
      this.currentSort = 'asc';
    }
    else
    {
      this.currentSort = (this.currentSort ==='asc')? 'desc' : 'asc';
    }
  }

  sort(){
    this.changeSortDirect();
    this.dataService.setSortCondition(this.item,this.currentSort);
  }

}
