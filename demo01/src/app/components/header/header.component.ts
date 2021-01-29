import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public msg:string = '数据绑定出来的字符串';

  constructor() { }

  ngOnInit(): void {
  }

}
