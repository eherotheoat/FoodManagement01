import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public img : string = "https://cdn.discordapp.com/attachments/607168575509233704/803278491616542780/png-clipart-food-background-food-fruit.jpg" ;
  constructor() { }

  ngOnInit() {
  }

}
