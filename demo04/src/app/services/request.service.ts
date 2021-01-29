import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class RequestService {

  public apUrl:string = 'https://v1.alapi.cn/api/soul';
  public apUrl2:string = '/aa';

  private httpHeader:any = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(public http:HttpClient) { }

  getPromisr() {
    return new Promise((resolve) => {
      setTimeout(()=> {
        let data:string = 'Promise里的数据';
        resolve(data);
      },2000)
    })
  }

  getRxjs() {
    return new Observable((observer) => {
      setTimeout(()=>{
        let data:string = 'rxjs里的数据';
        observer.next(data);
      },3000)
    })
  }

  getReq() {
    this.http.get(this.apUrl).subscribe((value)=> {
      console.log(value);
    })
  }

  postReq() {
    this.http.post(this.apUrl2,this.httpHeader).subscribe((value)=> {
      console.log(value);
    })
  }
}
