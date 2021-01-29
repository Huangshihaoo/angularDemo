import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(public route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.params.subscribe((value)=>{console.log(value);
    })
  }

}
