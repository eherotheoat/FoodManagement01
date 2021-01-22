import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore' ;

import { CrudService } from '../../service/crud.service';
import { menu } from '../../interface/Menu';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public menu: menu[] ;

  constructor(
    private crudService:CrudService,
    private Firesstore: AngularFirestore) 
  {
    this.started();
  }

  ngOnInit() {

  }

  async started(){
    var menu : menu[];
    await this.crudService.getMenu().then(value => {
      menu = value as menu[];
    });

    this.menu = menu;

    console.log(this.menu)
  }


}

class Menu{

}
