import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import 'firebase/firestore';

import { CrudService } from '../../service/crud.service';

//interface
import { menu } from '../../interface/Menu';
import { order } from '../../interface/Order';
import { orderT } from '../../interface/OrderT';
import { table } from '../../interface/Table'

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  public OrderedFood: boolean;
  public numTable : number = 2 ;

  constructor(
    private crudService: CrudService,
    private Firesstore: AngularFirestore,
    private modalService: BsModalService,
    private db: AngularFireDatabase
  )
  {

  }

  ngOnInit() {
    this.started();
  }

  async started() {
    var OF: orderT[]
    this.OrderedFood = false
    await this.crudService.getOrderFood().then(value => {
      OF = value as orderT[];
    });

    this.OrderedFood = OF[this.numTable-1].OrderedFood;
    console.log("FoodOrder",this.OrderedFood);
    // console.log("OF",OF[1].IdTable)
  }

}
