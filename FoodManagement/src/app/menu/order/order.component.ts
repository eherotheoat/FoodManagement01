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

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public menus: menu[];
  public orders: order[];

  public orderTs: order[];

  public numberTable: number = 1;

  public amount : string = "";
  public detail : string = "";
  public addEgg : boolean = false;

modalRef: BsModalRef;

constructor(
  private crudService: CrudService,
  private Firesstore: AngularFirestore,
  private modalService: BsModalService,
  private db: AngularFireDatabase
) {
  // this.db.object('Menu').set(this.menus);
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

  this.orders = orders;
  this.menus = menus;

  console.log(this.orders.length)

}


addOrder(amount, detail, addEgg, template, i) {

  let Order = {};
  let P: number;
  let idOrder: number ;

  if(this.orders.length == 0){
    idOrder = 0 ;
  }else{
    idOrder = this.orders.length ;
  }

  if (addEgg == true) {
    P = (this.menus[i].Price + 5) * amount;
  } else {
    P = this.menus[i].Price * amount;
  }
  console.log(idOrder)
  Order['IdOrder'] = idOrder;
  Order['IdTable'] = this.numberTable;
  Order['StatusBill'] = false;
  Order['StatusServed'] = false;
  Order['IdMenu'] = this.menus[i].IdMenu;
  Order['Amount'] = amount;
  Order['Detail'] = detail;
  Order['AddEgg'] = addEgg;
  Order['NameMenu'] = this.menus[i].NameMenu;
  Order['Price'] = P;

  this.crudService.addOrder(Order, idOrder).then(res => {
    this.clearValue();
    this.openPopup(template);
  }).catch(error => {
    console.log(error);
  })
  this.ngOnInit();
  console.log(Order)
}

openPopup(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
}

  clearValue() {
  this.amount = '';
  this.detail = '';
  this.addEgg = false;
}

  async sendOrder() {
  var orders: order[];
  let OrderQ = {};
  await this.crudService.getOrder().then(value => {
    orders = value as order[];
  });

  for(let i = 0; i<orders.length; i++) {
  if (orders[i].IdTable != this.numberTable) {
    orders.splice(i)
  }
}

this.orderTs = orders;

console.log(this.orderTs);

  }



}
