import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service'
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  constructor(public req: RequestService) { }

  ngOnInit(): void {

    let proData = this.req.getPromisr();
    proData.then((res) => {
      console.log(res);
    });

    let rxjsData = this.req.getRxjs();

    // let rxjsObj = rxjsData.subscribe((value) => {
    //   console.log(value);
    // })

    rxjsData.pipe(
      map((value) => {
        return value+'111';
      })
    ).subscribe((value) => {
        console.log(value);
      })

    // rxjsObj.unsubscribe();


  }


}
