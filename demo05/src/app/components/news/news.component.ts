import { Component, OnInit } from '@angular/core';
import {Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {

  public info:any[] = [
    {name:"zhangsan",age:20},
    {name:"lisi",age:30},
    {name:"wangwu",age:22}
];

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  goNewsContent() {
    let navigationExtras:NavigationExtras = {
      queryParams:{name:'zhangsan',age:20},
      fragment:'lll'
    }
    this.router.navigate(['newscontent'],navigationExtras);
  }

}
