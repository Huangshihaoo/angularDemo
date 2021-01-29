import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public arr:string[] = ['one','two','three'];


  constructor() { }

  ngOnInit(): void {
  }

}
