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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public OrderedFood: boolean;
  public resetOrder: orderT[];
  public numberTable : number = 1 ;

  constructor(
    private crudService: CrudService,
    private Firesstore: AngularFirestore,
    private modalService: BsModalService,
    private db: AngularFireDatabase
  ) {
    // this.resetOrder = [
    //   {
    //     OrderFood: false,
    //     IdTable: 1
    //   },
    //   {
    //     OrderFood: false,
    //     IdTable: 2
    //   },
    //   {
    //     OrderFood: false,
    //     IdTable: 3
    //   },
    //   {
    //     OrderFood: false,
    //     IdTable: 4
    //   },
    // ]
  }

  ngOnInit() {
    // this.db.object('OrderedFood').set(this.resetOrder);
    this.started();
  }

  async started() {
    var OF: orderT[]
    await this.crudService.getOrderFood().then(value => {
      OF = value as orderT[];
    });

    this.OrderedFood = OF[this.numberTable - 1].OrderedFood;
    console.log(this.OrderedFood)
  }



}
