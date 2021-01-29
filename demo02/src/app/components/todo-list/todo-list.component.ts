import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  // todolist数组
  public todoList: any[] = [];
  // 输入框内容
  public incident: string = '';
  // 待办数组
  // public course: any[] = [];
  public courseNum: number = 0;
  // 已完成数组
  // public end: any[] = [];
  public endNum: number = 0;

  constructor( public storage:StorageService ) {

    let temp = this.storage.get('todo');
    if (temp) {
      this.todoList = temp
    }

    this.count(this.todoList);

    // this.classify();
  }

  ngOnInit(): void {

  }

  // 状态改变方法
  cheng(id) {

    this.todoList.map((val, i) => {

      let temp: any = {};

      if (val.id == id) {
        val.state = !val.state;
        temp = val;
        this.todoList.splice(i, 1);
        this.todoList.unshift(temp);
      }
    })
    this.count(this.todoList);
    this.storage.updata('todo',this.todoList);
    // this.classify()
  }

  // 将整个todolist分完成未完成两类
  // classify() {

  //   this.course.splice(0, this.course.length + 1);
  //   this.end.splice(0, this.end.length + 1);

  //   this.todoList.map((val) => {

  //     if (val.state) {
  //       this.end.push(val);
  //     } else {
  //       this.course.push(val);
  //     }
  //   })

  //   localStorage.setItem('todo', JSON.stringify(this.todoList))
  // }

  // 增加todolost方法
  add(e) {

    if (e.keyCode === 13) {

      if (this.repetition(this.incident)) {
        // 增加数据
        this.todoList.unshift({
          incident: this.incident,
          state: false,
          id: new Date().getTime()
        });
        // 清空输入
        this.incident = '';
        // 分类
        // this.classify();
        this.count(this.todoList);
        // 增加后的todoList存到浏览器
        this.storage.updata('todo',this.todoList);
      }
    }
  }

  // 删除事件
  dele(id) {
    this.todoList.map((val, i) => {
      if (val.id === id) {
        this.todoList.splice(i, 1);
        // this.classify();
        this.storage.updata('todo',this.todoList);
      }
    })
    this.count(this.todoList);
  }

  // 阻止重复输入以及无输入
  repetition(value: string) {
    let flag: boolean = true;
    value === '' ? flag = false : flag;
    this.todoList.forEach((val) => {
      if (val.incident === value) {
        flag = false;
      }
    })
    return flag;
  }

  count(data) {
    this.courseNum = 0;
    this.endNum = 0;
    data.map((val) => {
      if (val.state) {
        this.endNum++;
      } else {
        this.courseNum++;
      }
    })
  }

}
