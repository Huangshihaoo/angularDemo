import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  get(name:string):any {
   return JSON.parse(localStorage.getItem(name));
  }

  updata(name:string,arr:any[]):void {
    localStorage.setItem(name, JSON.stringify(arr))
  }
}
