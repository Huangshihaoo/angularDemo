import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchData:any = '';

  public list:any[] = ['初始数据','初始数据2'];

  constructor() { }

  ngOnInit(): void {
  }

  down(e) {
    if(e.keyCode === 13) {
      if(this.list.indexOf(e.target.value) == -1 ) {
          this.list.push(e.target.value);
      }

      e.target.value = '';
    }
  }

  delete(index) {
    console.log(index);
    this.list.splice(index,1)
  }

}
