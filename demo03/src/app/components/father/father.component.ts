import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  public name:string = 'father';

  constructor() { }

  ngOnInit(): void {
    // 原生方法
    let father: any = document.querySelector('.father');
    father.style.background = '#ccc';
  }

  @ViewChild('father') fatherrr: any;
  @ViewChild('son') son: any;

  run() {
    this.son.sonFun();
  }

  ngAfterViewInit(): void {
    console.log(this.fatherrr);
    this.fatherrr.nativeElement.style.background = 'red';
    this.run();
  }

}
