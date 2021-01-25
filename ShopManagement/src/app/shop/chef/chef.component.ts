import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';

import { CrudService } from '../../service/crud.service';

//interface
import { menu } from '../../interface/Menu';
import { order } from '../../interface/Order';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {

  public menus: menu[];
  public orders: order[];
  public detailOrders: any[] = [];
  public numOrder: number[] = [];
  public menuOrder: any[] = [] ;

  constructor(
    private crudService: CrudService,
    private Firesstore: AngularFirestore,
    private modalService: BsModalService,
  ) {

  }

  ngOnInit() {
    this.started();
  }

  async started() {
    var menus: menu[];
    var orders: order[];
    var chackTable: any[] = [];
    await this.crudService.getMenu().then(value => {
      menus = value as menu[];
    });

    await this.crudService.getOrder().then(value => {
      orders = value as order[];
    });

    this.orders = orders;
    this.menus = menus;

    for (let i = 0; i < this.orders.length; i++) {
      chackTable.push(this.orders[i].IdTable);
    }
    var set = new Set(chackTable);
    this.numOrder = [...set];

    let detailOrder = {};
    let datail: any[] = [];
    let detailOrder2: any[] = [];
    var n: number;


    for (let i = 0; i < this.numOrder.length; i++) {

      datail = [];

      for (let j = 0; j < this.orders.length; j++) {

        if (this.numOrder[i] == this.orders[j].IdTable) {
          detailOrder['IdTable'] = this.orders[j].IdTable;
          detailOrder['NameMenu'] = this.orders[j].NameMenu;
          detailOrder['IdOrder'] = this.orders[j].IdOrder;

          datail.push(j)
          console.log("i", i, "J", j, detailOrder, "J-new", datail)
        }

      }

      this.detailOrders.push(datail);
      // console.log(this.detailOrders)

    }
    var maxLength :number = 0;
    for(let i =0; i<this.detailOrders.length;i++){
      var chack :number = this.detailOrders[i].length;
      if(maxLength <= chack){
        maxLength = chack ;
      }
    }
    for(let i=0;i<maxLength;i++){
      this.menuOrder.push(i);
    }
    console.log(this.detailOrders)




  }

  showDetail() {
    // let detailOrder = {};
    // let detailOrder1 = {};

    // detailOrder['NameMenu'] = this.orders[1].NameMenu;
    // detailOrder['IdTable'] = this.orders[1].IdTable;

    // detailOrder1['NameMenu'] = this.orders[2].NameMenu;
    // detailOrder1['IdTable'] = this.orders[2].IdTable;

    // this.detailOrders.push(detailOrder);
    // this.detailOrders.push(detailOrder1);

    // console.log(this.detailOrders)

  }


}
