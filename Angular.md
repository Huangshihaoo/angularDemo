# angular

说明：此笔记为angular2x版本的学习笔记

## angularCLI



脚手架： `npm install -g @angular/cli`

查看脚手架版本：`ng v`

新建项目：`ng new 项目名称 --skip-install` // 创建新项目不做下载

运行项目：在文件所在目录`ng serve --open`

创建新组件：ng g component /components/news

使用组件：xxx.component.ts里的selector就是标签名

新建服务：`ng g service  目录/服务名` 使用方法下面有详解 

## angular基础



定义数据：` public msg:*string* = '定义对象使用any类型';`

绑定数据：`<p>{{msg}}</p>`

绑定属性：中括号括住属性`<div [title]="msg">{{msg}}</div>`

解析html：`<div [innerHTML]="myHtml"></div>`

数组循环：`  <li *ngFor="let item of arr">{{item}}</li>`

样式控制：`<div [ngClass]="{'red': flag}">我是ngclass控制的样式</div>`

style控制：`<div [ngStyle]="{'fontSize': '20px'}">字体大小为20px</div>`

管道：`<div>管道{{toDay}}-{{toDay | date:"YYYY-MM-dd HH:mm:ss"}}</div>`

事件及 事件对象：`<button (click)="cli($event)">点击</button>`

做双向数据绑定之前先在module.ts里面引入import {FormsModule} from '@angular/forms' 然后在imports数组的声明

表单的双向数据绑定：`<input *type*="text" *[(ngModel)]*="data">`

angulae服务：`ng g service  目录/服务名` 这个服务感觉像注册全局方法

引入并配置服务：在module.ts`import {StorageService} from './目录名/服务名.servicr'`并在@NgModule里的providers数组里添加StorageService然后哪里需要哪里引，还要在构造函数里作为参数传进去`public 取个名字：StorageService`用的时候就是this.取的名字...

angularDom操作1：可以用原生的

angularDom操作2：viewChild 给html定名字`<div #名字></div>` 然后组件核心模块中引入，节点获取方法`@ViewChild('名字') 变量:any`(不能在方法里调用)，这就相当于把节点获取到变量了。这个变量如果是组件的话就相当于这个组件的实例，可以调用组件里的方法

angularCss3动画：就是用操作dom的css

父组件给子组件传值：调用组件写入自定义属性`<app-header [name]='name'></app-header>`，子组件ts引入Input核心模块` @Input() name:string;`，name就是传过来的值，方法也算同样发传法，传方法注意不要加(),且类型是any，把整个父组件传给子组件，`[name]='this'`

子组件给父组件传值：用viewChild在上面以经有了

Rxjs异步流：

```javascript
import {map} from 'rxjs/operators' // 引入工具函数
getRxjs() {
   return new Observable((observer) => {
     	// 这个定时器也可以改成重复定时器，支持多次返回数据
       setTimeout(()=>{
       let data:string = 'rxjs里的数据';
       observer.next(data);
       // observer.error(errorData); 失败返回
     },3000)
   })
 }

let rxjsData = this.req.getRxjs();

let rxjsObj = rxjsData.subscribe((value) => {
      console.log(value);
})

rxjsObj.unsubscribe(); // 撤回订阅

// 使用工具方法
rxjsData.pipe(
      map((value) => {
        return value+'111';
      })
    ).subscribe((value) => {
        console.log(value);
      })
```

angular Get请求：先在module.ts中引入`import {HttpClientModule} from '@angular/common/http'` 然后在imports数组中添加。然后在用到的地方引入`import {HttpClient} from '@angular/common/http'`，并在构造函数中声明`constructor(public http:HttpClient){}`,使用是`this.http.get()`

```typescript
  getReq() {
    this.http.get(this.apUrl).subscribe((value)=> {
      console.log(value);
    })
  }
```



angular Post请求:比get请求要多引入一个HttpHeaders``import {HttpClient, HttpHeaders} from '@angular/common/http`然后设置请求头` private httpHeader:any = {headers: new HttpHeaders({'Content-Type': 'application/json'})}`

```typescript
  postReq() {
    this.http.post(this.apUrl2,{传数据},this.httpHeader)
    	.subscribe((value)=> {
      		console.log(value);
    })
  }
```

angularJSONP请求：先在module.ts中引入`import {HttpClientModule，HttpClientJsonpModule} from '@angular/common/http'` 然后在imports数组中添加。使用所在构造函数中声明`constructor(public http:HttpClient){}`，然后用jsonp方法，不详解了

第三方请求使用axios:该咋用咋用

angular跨域请求代理：先搞个json文件代码如下，再在angular.json里的serve.options加入配置："proxyConfig": "proxy.conf.json"

```json
## 最简版
{
  "/aa": {
    "target": "http://localhost:8080/server/server.php"
  }
}
## 完整版，不太理解，简单的能用就好了
{
  "/api-weather": {    //需要代理的请求: http://localhost:4200/api-weather
    "target": "http://t.weather.sojson.com",//反向代理到target，请求变成：http://t.weather.sojson.com/api-weather
    "logLevel": "debug", //打印代理过程
    "changeOrigin": true,
    "secure": false,
    "pathRewrite": {
        "^/api-weather": ""  //将/api-weather替换为空，新的请求变成：http://t.weather.sojson.com
    }
  }
}
```

## angular路由

1、先创建带路由的项目

2、然后创建需要的组件

3、再路由模块引入所要映射的组件

4.配置路由(路由不带/)`const routes: Routes = [{path:'home',component: HomeComponent}`,a链接有变`<a routerLink='/home'>首页</a>`，

5、匹配不到路由时默认跳转路由(默认挂载组件)`{path: '**',redirectTo:'home'}`，

6、选中状态`<a routerLink="/news" routerLinkActive="css类名">news</a>`

7、get传值：`<a [routerLink]="[ '/newscontent' ]" [queryParams]="{id:key}">新闻详情</a>`

8、子组件获取get传值：先引入模块`import { ActivatedRoute } from '@angular/router';`然后在构造函数中声明` constructor(public *route*:ActivatedRoute) { }`，取值`*this*.route.queryParams.subscribe((*value*)=>{console.log(*value*);})`

9、动态传值：定义路由` {path:'home/:index',component: HomeComponent}`，使用路由`<a *ngFor="let item of items,let key = index"  [routerLink]="[ 'home/',key ]" >home</a>`，取值跟上一条一样，取值部分`this.route.params.subscribe((value)=>{console.log(value);`

10、动静态路由js跳转：引入`import { Router } from '@angular/router';`,构造函数注入`constructor(public router:Router) {}`静态跳转`this.router.navigate(['/news'])`，动态跳转`this.router.navigate(['/home','123'])`

11、jsGet传值跳转：引入`import {Router,NavigationExtras } from '@angular/router';`,注入`constructor(public router:Router) {}`，使用：

```typescript
goNewsContent() {
    let navigationExtras:NavigationExtras = {
      queryParams:{name:'zhangsan',age:20},
      fragment:'lll'
    }
    this.router.navigate(['newscontent'],navigationExtras);
  }
```

12、嵌套路由：

```javascript
// 路由定义
{
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'homelist', component: HomelistComponent },
      { path: 'homecontent', component: HomecontentCompon}，
      { path: '**', redirectTo: 'homelist' } // 默认
    ]
  }
// 链接跳转 // 带上父路径
 //<a [routerLink]="[ '/home/homelist']">homelist</a>
 //<a [routerLink]="[ '/home/homecontent']">homecontent</a>
// 组件显示 //<router-outlet></router-outlet>
  //<div class="right">
    //<router-outlet></router-outlet>
  //</div>
```



## angular生命周期钩子



ngOnInit(){}:组件和指令初始化完成，并不是正真的dom加载完成(一般用来请求数据)

ngDoCheck(){}:检测并在发生Angular无法或不愿意自己检测的变化时做出反应

ngOnChanges(){}:当被绑定的输入属性的值发生改变时调用(父子组件传值会触发)

ngAfterContentInit(){}：当把外部内容投影进组件之后调用。

ngAfterContentChecked():每次完成被投影组件内容的变更检测之后调用

ngAfterViewInit(){}:视图加载完成后触发的方法  dom加载完成  （dom操作尽量在这里做）

ngAfterViewChecked()：每次做完组件视图和子组件视图的变更检测之后调用

ngOnDestroy()：组件销毁前

页面初始化： ngOnInit 》 ngDoCheck 》 ngAfterContentInit 》ngAfterContentChecked 》 ngAfterViewInit 》 ngAfterViewChecked

数据改变： ngDoCheck 》ngAfterContentChecked 》 ngAfterViewChecked

