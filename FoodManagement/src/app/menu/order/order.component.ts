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
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public menus: menu[];
  public orders:order[];

  public orderTs:order[];

  public numberTable: number = 1;

  modalRef: BsModalRef;

  public amount: string;
  public detail: string;
  public addEgg: boolean;

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
    var orders : order[];
    await this.crudService.getMenu().then(value => {
      menus = value as menu[];
    });

    await this.crudService.getOrder().then(value => {
      orders = value as order[];
    });

    this.orders = orders;
    this.menus = menus;

  }

  addOrder(amount, detail, addEgg, template, i) {

    let Order = {};
    var orders : order[];
    let idOrder : number =1;
    let P : number ;

    for(let i=0 ; i<this.orders.length ; i++){
      idOrder = i + 1 ;
    }

    if(addEgg==true){
      P = (this.menus[i].Price+5) * amount;
    }else{
      P = this.menus[i].Price * amount;
    }

    Order['IdOrder'] = idOrder+1;
    Order['IdTable'] = this.numberTable;
    Order['StatusBill'] = false;
    Order['StatusServed'] = false;
    Order['IdMenu'] = this.menus[i].IdMenu;
    Order['Amount'] = amount;
    Order['Detail'] = detail;
    Order['AddEgg'] = addEgg;
    Order['NameMenu'] = this.menus[i].NameMenu;
    Order['Price'] = P;

    this.crudService.addOrder(Order).then(res => {
      this.clearValue();
      this.openPopup(template);
      this.ngOnInit();
    }).catch(error => {
      console.log(error);
    })
    
    console.log(Order)
  }

  addOrde(amount, detail, addEgg, template, i) {

    let Order = {};
    var orders : order[];
    let idOrder : number =1;
    let P : number ;

    for(let i=0 ; i<this.orders.length ; i++){
      idOrder = i + 1 ;
    }

    if(addEgg==true){
      P = (this.menus[i].Price+5) * amount;
    }else{
      P = this.menus[i].Price * amount;
    }

    Order['IdOrder'] = idOrder+1;
    Order['IdTable'] = this.numberTable;
    Order['StatusBill'] = false;
    Order['StatusServed'] = false;
    Order['IdMenu'] = this.menus[i].IdMenu;
    Order['Amount'] = amount;
    Order['Detail'] = detail;
    Order['AddEgg'] = addEgg;
    Order['NameMenu'] = this.menus[i].NameMenu;
    Order['Price'] = P;

    this.crudService.addOrder(Order).then(res => {
      this.clearValue();
      this.openPopup(template);
      this.ngOnInit();
    }).catch(error => {
      console.log(error);
    })
    
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

  async sendOrder(){
    var orders : order[];
    let OrderQ = {};
    await this.crudService.getOrder().then(value => {
      orders = value as order[];
    });

    for(let i =0 ; i<orders.length ; i++){
      if(orders[i].IdTable != this.numberTable){
        orders.splice(i)
      }
    }

    this.orderTs = orders;

    console.log(this.orderTs);

  }



}
