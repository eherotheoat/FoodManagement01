import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';


import { CrudService } from '../../service/crud.service';

//interface
import { menu } from '../../interface/Menu';
import { order } from '../../interface/Order';
import { orderT } from '../../interface/OrderT';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {

  public menus: menu[];
  public orders: order[];
  public Queues: order[];
  public orderMakes: order[];
  public TableQ: number;

  public table1: order[];
  public table2: order[];
  public table3: order[];
  public table4: order[];

  public numOrder: number[] = [];

  modalRef: BsModalRef;

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
    await this.crudService.getMenu().then(value => {
      menus = value as menu[];
    });

    await this.crudService.getOrder().then(value => {
      orders = value as order[];
    });
    for (let i = 0; i < orders.length; i++) {
      if (orders[i].StatusServed == true) {
        orders.splice(i, 1);
        i = -1;
      }
    }
    console.log(orders);
    this.orders = orders;
    this.menus = menus;
    if (this.orders) {
      await this.chackQ();
      await this.T1();
      await this.T2();
      await this.T3();
      await this.T4();
    }

    

    if (this.TableQ == 1) {
      this.orderMakes = this.table1;
    }
    if (this.TableQ == 2) {
      this.orderMakes = this.table2;
    }
    if (this.TableQ == 3) {
      this.orderMakes = this.table3;
    }
    if (this.TableQ == 4) {
      this.orderMakes = this.table4;
    }

    console.log("T",this.orderMakes)

  }

  chackQ() {
    var Q: number = this.orders[0].IdOrder;
    var TQ: number;
    // console.log(Q);
    for (let i = 0; i < this.orders.length; i++) {
      if (this.orders[i].IdOrder <= Q) {
        Q = this.orders[i].IdOrder;
        console.log("เข้า IF", Q)
      }
    }
    for (let i = 0; i < this.orders.length; i++) {
      if (this.orders[i].IdOrder == Q) {
        this.TableQ = this.orders[i].IdTable;
      }
    }
    console.log("โต๊ะ ก่อน", this.TableQ)
  }

  charkOrder() {
    this.numOrder = [];
    this.ngOnInit();
    if (this.table1.length > 0) {
      this.numOrder.push(1);
    }
    if (this.table2.length > 0) {
      this.numOrder.push(2);
    }
    if (this.table3.length > 0) {
      this.numOrder.push(3);
    }
    if (this.table4.length > 0) {
      this.numOrder.push(4);
    }
  }

  async T1() {

    var orders: order[];
    await this.crudService.getOrder().then(value => {
      orders = value as order[];
    });
    // console.log("LO",orders)
    var inIF: boolean = false;
    for (let i = 0; i < orders.length; i++) {
      // console.log(i)
      if (orders[i].IdTable != 1) {
        // console.log("Order ก่อน",orders,"i",i)
        orders.splice(i, 1)
        // console.log("Order หลัง",orders,"i",i)
        i = -1;

      }

    }
    for (let i = 0; i < orders.length; i++) {
      if (orders[i].StatusServed == true) {
        orders.splice(i, 1)
        i = -1;
      }
    }
    this.table1 = orders;

    // console.log("T1",this.table1);

  }

  async T2() {

    var orders: order[];
    await this.crudService.getOrder().then(value => {
      orders = value as order[];
    });
    for (let i = 0; i < orders.length; i++) {
      if (orders[i].IdTable != 2) {
        orders.splice(i, 1)
        i = -1;
      }
    }
    for (let i = 0; i < orders.length; i++) {
      if (orders[i].StatusServed == true) {
        orders.splice(i, 1)
        i = -1;
      }
    }
    this.table2 = orders;

    // console.log("T2",this.table2);

  }

  async T3() {

    var orders: order[];
    await this.crudService.getOrder().then(value => {
      orders = value as order[];
    });
    for (let i = 0; i < orders.length; i++) {
      if (orders[i].IdTable != 3) {
        orders.splice(i, 1)
        i = -1;
      }
    }
    for (let i = 0; i < orders.length; i++) {
      if (orders[i].StatusServed == true) {
        orders.splice(i, 1)
        i = -1;
      }
    }
    this.table3 = orders;

    // console.log("T3",this.table3);

  }

  async T4() {

    var orders: order[];
    await this.crudService.getOrder().then(value => {
      orders = value as order[];
    });
    for (let i = 0; i < orders.length; i++) {
      if (orders[i].IdTable != 4) {
        orders.splice(i, 1)
        i = -1;
      }
    }
    for (let i = 0; i < orders.length; i++) {
      if (orders[i].StatusServed == true) {
        orders.splice(i, 1)
        i = -1;
      }
    }
    this.table4 = orders;

    // console.log("T4",this.table4);

  }

  openPopup(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  sendServed(order, template) {
    let Oder = {};
    console.log("order",order)
    for (let i = 0; i < order.length; i++) {
      Oder['IdOrder'] = order[i].IdOrder;
      Oder['IdTable'] = order[i].IdTable;
      Oder['StatusBill'] = order[i].StatusBill;
      Oder['StatusServed'] = true;
      Oder['IdMenu'] = order[i].IdMenu;
      Oder['Amount'] = order[i].Amount;
      Oder['Detail'] = order[i].Detail;
      Oder['AddEgg'] = order[i].AddEgg;
      Oder['NameMenu'] = order[i].NameMenu;
      Oder['Price'] = order[i].Price;
      Oder['StatusChackBill'] = order[i].StatusChackBill;

      this.crudService.addOrder(Oder, order[i].IdOrder).then(res => {
        this.ngOnInit();
      }).catch(error => {
        console.log(error);
      })

      this.crudService.addOrderW(Oder, order[i].IdOrder).then(res => {
        this.ngOnInit();
      }).catch(error => {
        console.log(error);
      })
    }
    this.orderMakes = [];
    this.ngOnInit();

  }

  // sendServed(numtable ,template) {
  //   console.log(this.table1.length)
  //   if (numtable == 1) {
  //     var orderW = {};
  //     for (let i = 0; i < this.table1.length; i++) {
  //       orderW['IdOrder'] = this.table1[i].IdOrder;
  //       orderW['IdTable'] = this.table1[i].IdTable;
  //       orderW['StatusBill'] = this.table1[i].StatusBill;
  //       orderW['StatusServed'] = true;
  //       orderW['IdMenu'] = this.table1[i].IdMenu;
  //       orderW['Amount'] = this.table1[i].Amount;
  //       orderW['Detail'] = this.table1[i].Detail;
  //       orderW['AddEgg'] = this.table1[i].AddEgg;
  //       orderW['NameMenu'] = this.table1[i].NameMenu;
  //       orderW['Price'] = this.table1[i].Price;

  //       // console.log(orderW)

  //       this.crudService.addOrderW(orderW,this.table1[i].IdOrder).then(res => {

  //       }).catch(error => {
  //         console.log(error);
  //       })

  //       this.crudService.Served(orderW,this.table1[i].IdOrder).then(res => {
  //       }).catch(error => {
  //         console.log(error);
  //       })

  //     }
  //     console.log("T1",this.table1);
  //     this.openPopup(template);
  //     this.table1 = []
  //     this.charkOrder();
  //     console.log(this.table1);

  //   }
  // }

}
