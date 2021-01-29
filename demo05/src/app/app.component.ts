import { Component } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'demo05';
  constructor(public router:Router) {}
  public items:number[]=[1,2,3,4];
  goNews(){
    this.router.navigate(['/news'])
  }
  goHome(){
    this.router.navigate(['/home','123'])
  }
}
