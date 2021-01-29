import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // 对象
  public user: any = {
    name: '张三',
    age: 12
  };

  // 文本数据
  public msg: string = '定义对象使用any类型';

  // 类名
  public myclass: string = 'color';

  // 定义一个html标签
  public myHtml: string = '<a href="#">定义出来的a标签</a>';

  // 布尔变量
  public flag: boolean = true;

  // 来个时间戳
  public toDay:Date = new Date();
// 先在module.ts里面引入import {FormsModule} from '@angular/forms'
// 然后在imports数组的声明
  public data:string = '双向数据绑定';

  constructor() { }

  ngOnInit(): void {
  }

  cli(e) {
    alert(e.target+'我被点击了');
  }
  setData() {
    this.data = '双向数据绑定我被改变了';
  }

}
