import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {

  public name:string = 'son';

  constructor() { }

  ngOnInit(): void {
  }

  sonFun() {
    console.log('我是子组件方法');

  }

}
