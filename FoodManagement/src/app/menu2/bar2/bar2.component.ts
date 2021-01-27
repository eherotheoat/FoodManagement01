import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar2',
  templateUrl: './bar2.component.html',
  styleUrls: ['./bar2.component.css']
})
export class Bar2Component implements OnInit {

  public numberTable:number = 2 ;

  constructor() { }

  ngOnInit() {
  }

}
