import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';


import { CrudService } from '../../service/crud.service';

//interface
import { menu } from '../../interface/Menu';
import { order } from '../../interface/Order';
import { orderT } from '../../interface/OrderT';
import { table } from '../../interface/Table'

@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.css']
})
export class CashierComponent implements OnInit {

  public menus: menu[];
  public orders: order[];
  public Bills: order[];

  public table1: order[];
  public table2: order[];
  public table3: order[];
  public table4: order[];

  public PriceT1: number;
  public PriceT2: number;
  public PriceT3: number;
  public PriceT4: number;

  public ChackOrderT1: boolean = true;
  public ChackOrderT2: boolean = true;
  public ChackOrderT3: boolean = true;
  public ChackOrderT4: boolean = true;

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

    var Bills: order[];
    await this.crudService.getOrder().then(value => {
      Bills = value as order[];
    });

    this.Bills = Bills

    await this.T1();
    await this.T2();
    await this.T3();
    await this.T4();

    // console.log("T1", this.table1);
    // console.log("T2", this.table2);
    // console.log("T3", this.table3);
    // console.log("T4", this.table4);
    if (this.table1.length > 0) {
      this.PriceT1 = 0;
      for (let i = 0; i < this.table1.length; i++) {
        this.PriceT1 = this.table1[i].Price + this.PriceT1;
      }
    }

    if (this.table2.length > 0) {
      this.PriceT2 = 0;
      for (let i = 0; i < this.table2.length; i++) {
        this.PriceT2 = this.table2[i].Price + this.PriceT2;
      }
    }
    if (this.table3.length > 0) {
      this.PriceT3 = 0;
      for (let i = 0; i < this.table3.length; i++) {
        this.PriceT3 = this.table3[i].Price + this.PriceT3;
      }
    }
    if (this.table4.length > 0) {
      this.PriceT4 = 0;
      for (let i = 0; i < this.table4.length; i++) {
        this.PriceT4 = this.table4[i].Price + this.PriceT4;
      }
    }

    // console.log("PriceT1", this.PriceT1)
    // console.log("T1", this.ChackOrderT1)
    // console.log("PriceT2", this.PriceT2)
    // console.log("T2", this.ChackOrderT2)
    // console.log("PriceT3", this.PriceT3)
    // console.log("T3", this.ChackOrderT3)
    // console.log("PriceT4", this.PriceT4)
    // console.log("T4", this.ChackOrderT4)

  }

  async T1() {

    var Bills: order[];
    var Price: number = 0;
    await this.crudService.getOrder().then(value => {
      Bills = value as order[];
    });
    // console.log("LO",orders)
    var inIF: boolean = false;
    for (let i = 0; i < Bills.length; i++) {
      // console.log(i)
      if (Bills[i].IdTable != 1) {
        // console.log("Order ก่อน",orders,"i",i)
        Bills.splice(i, 1)
        // console.log("Order หลัง",orders,"i",i)
        i = -1;

      }
      for (let i = 0; i < Bills.length; i++) {
        if (Bills[i].StatusBill == false || Bills[i].StatusServed == false || Bills[i].StatusChackBill == true) {
          Bills.splice(i, 1);
          i = -1;
        }
        // if(Bills[i].StatusChackBill == false){
        //   this.ChackOrderT1 = false;
        //   i = -1;
        // }
      } 

    }
    this.table1 = Bills;


  }

  async T2() {

    var Bills: order[];
    var Price: number = 0;
    await this.crudService.getOrder().then(value => {
      Bills = value as order[];
    });
    for (let i = 0; i < Bills.length; i++) {
      if (Bills[i].IdTable != 2) {
        Bills.splice(i, 1)
        i = -1;
      }
    }
    for (let i = 0; i < Bills.length; i++) {
      if (Bills[i].StatusBill == false || Bills[i].StatusServed == false || Bills[i].StatusChackBill == true) {
        Bills.splice(i, 1);
        i = -1;
      }
      // if(Bills[i].StatusChackBill == false){
      //   this.ChackOrderT2 = false;
      //   i = -1;
      // }
    }
    this.table2 = Bills;



  }

  async T3() {

    var Bills: order[];
    var Price: number = 0;
    await this.crudService.getOrder().then(value => {
      Bills = value as order[];
    });
    for (let i = 0; i < Bills.length; i++) {
      if (Bills[i].IdTable != 3) {
        Bills.splice(i, 1);
        i = -1;
      }
    }
    for (let i = 0; i < Bills.length; i++) {
      if (Bills[i].StatusBill == false || Bills[i].StatusServed == false || Bills[i].StatusChackBill == true) {
        Bills.splice(i, 1);
        i = -1;
      }
      // if(Bills[i].StatusChackBill == false){
      //   this.ChackOrderT3 = false;
      //   i = -1;
      // }
    }
    this.table3 = Bills;



  }

  async T4() {

    var Bills: order[];
    var Price: number = 0;
    await this.crudService.getOrder().then(value => {
      Bills = value as order[];
    });
    for (let i = 0; i < Bills.length; i++) {
      if (Bills[i].IdTable != 4) {
        Bills.splice(i, 1)
        i = -1;
      }
    }
    for (let i = 0; i < Bills.length; i++) {
      if (Bills[i].StatusBill == false || Bills[i].StatusServed == false || Bills[i].StatusChackBill == true) {
        Bills.splice(i, 1);
        i = -1;
      }
      // if(Bills[i].StatusChackBill == false){
      //   this.ChackOrderT4 = false;
      //   i = -1;
      // }
    }
    this.table4 = Bills;



  }

  clearBill(table: order[]) {
    var OrderedFood: boolean = false;
    var addTable = {};
    addTable['IdTable'] = table[0].IdTable;
    addTable['StatusTable'] = true;

    for (let i = 0; i < table.length; i++) {
      var Order = {}

      Order['IdOrder'] = table[i].IdOrder;
      Order['IdTable'] = table[i].IdTable;
      Order['StatusBill'] = table[i].StatusBill;
      Order['StatusServed'] = table[i].StatusServed;
      Order['IdMenu'] = table[i].IdMenu;
      Order['Amount'] = table[i].Amount;
      Order['Detail'] = table[i].Detail;
      Order['AddEgg'] = table[i].AddEgg;
      Order['NameMenu'] = table[i].NameMenu;
      Order['Price'] = table[i].Price;
      Order['StatusChackBill'] = true;

      this.crudService.addOrder(Order, table[i].IdOrder).then(res => {
        this.ngOnInit();
      }).catch(error => {
        console.log(error);
      })

    }

    this.crudService.chackOrder(OrderedFood, table[0].IdTable);
    var Table = table[0].IdTable;
    this.crudService.addTable(addTable, Table-1).then(res => {
      this.ngOnInit();
    }).catch(error => {
      console.log(error);
    })

    
    console.log("table[0].IdTable",table[0].IdTable);
    if (table[0].IdTable == 1) {
      console.log("เข้า IF")
      this.ChackOrderT1 = true;
      this.PriceT1 = null ;
      this.table1 = []
    }
    if (table[0].IdTable == 2) {
      this.ChackOrderT2 = true;
      this.PriceT2 = null ;
      this.table2 = []
    }
    if (table[0].IdTable == 3) {
      this.ChackOrderT3 = true;
      this.PriceT3 = null ;
      this.table3 = []
    }
    if (table[0].IdTable == 4) {
      this.ChackOrderT4 = true;
      this.PriceT4 = null ;
      this.table4 = []
    }
    this.ngOnInit();
    // console.log(table);
  }

}
