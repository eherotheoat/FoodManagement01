import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar3',
  templateUrl: './bar3.component.html',
  styleUrls: ['./bar3.component.css']
})
export class Bar3Component implements OnInit {

  public numberTable :number = 3 ;

  constructor() { }

  ngOnInit() {
  }

}
