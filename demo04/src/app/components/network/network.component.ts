import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../services/request.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.less']
})
export class NetworkComponent implements OnInit {

  constructor(public req: RequestService) { }

  ngOnInit(): void {
  }

  getReq() {
    this.req.getReq();
  }
  postReq(){
    this.req.postReq();

  }
  jsonpReq() {
    console.log(3);

  }

}
