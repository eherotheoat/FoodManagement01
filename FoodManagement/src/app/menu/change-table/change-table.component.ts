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
  selector: 'app-change-table',
  templateUrl: './change-table.component.html',
  styleUrls: ['./change-table.component.css']
})
export class ChangeTableComponent implements OnInit {

  public tables: table[];
  public orders: order[];
  public change: number;
  public statusTable1: boolean;
  public statusTable2: boolean;
  public statusTable3: boolean;
  public statusTable4: boolean;

  public table1: order[];
  public table2: order[];
  public table3: order[];
  public table4: order[];

  public chackTable1: boolean = true;
  public chackTable2: boolean = false;
  public chackTable3: boolean = false;
  public chackTable4: boolean = false;

  public numberTable: number = 1;

  modalRef: BsModalRef;

  constructor
    (
      private crudService: CrudService,
      private Firesstore: AngularFirestore,
      private modalService: BsModalService,
      private db: AngularFireDatabase

    ) {

  }

  ngOnInit() {

    this.started();

  }

  async started() {
    var tables: table[];
    var orders: order[];

    await this.crudService.getOrder().then(value => {
      orders = value as order[];
    });
    await this.crudService.getTable().then(value => {
      tables = value as table[];
    });

    this.orders = orders;
    this.tables = tables;

    for (let i = 0; i < this.tables.length; i++) {
      if (this.tables[i].IdTable == 1) {
        this.statusTable1 = this.tables[i].StatusTable;
      }
      if (this.tables[i].IdTable == 2) {
        this.statusTable2 = this.tables[i].StatusTable;
      }
      if (this.tables[i].IdTable == 3) {
        this.statusTable3 = this.tables[i].StatusTable;
      }
      if (this.tables[i].IdTable == 4) {
        this.statusTable4 = this.tables[i].StatusTable;
      }
    }

    for (let i = 0; i < this.orders.length; i++) {
      if (this.orders[i].IdTable == 1) {
        this.chackTable1 = true;
        console.log("เข้า T1");
      }
      if (this.orders[i].IdTable == 2) {
        this.chackTable2 = true;
        console.log("เข้า T2");
      }
      if (this.orders[i].IdTable == 3) {
        this.chackTable3 = true;
        console.log("เข้า T3");
      }
      if (this.orders[i].IdTable == 4) {
        this.chackTable4 = true;
        console.log("เข้า T4");
      }
    }
    this.T1();
    this.T2();
    this.T3();
    this.T4();

  }


  chang_table(numTable, template) {
    numTable = numTable + 1;
    // console.log(numTable);
    if (numTable == 1) {
      for (let i = 0; i < this.table1.length; i++) {
        var order = {};
        order['AddEgg'] = this.table1[i].AddEgg;
        order['Amount'] = this.table1[i].Amount;
        order['Detail'] = this.table1[i].Detail;
        order['IdMenu'] = this.table1[i].IdMenu;
        order['IdOrder'] = this.table1[i].IdOrder;
        order['IdTable'] = this.numberTable;
        order['NameMenu'] = this.table1[i].NameMenu;
        order['Price'] = this.table1[i].Price;
        order['StatusBill'] = this.table1[i].StatusBill;
        order['StatusServed'] = this.table1[i].StatusServed;
        order['StatusChackBill'] = this.table1[i].StatusChackBill;

        this.crudService.addOrder(order, this.table1[i].IdOrder).then(res => {

        }).catch(error => {
          console.log(error);
        })

      }
    }

    if (numTable == 2) {
      // console.log("เปลี่ยนจาก T2")
      for (let i = 0; i < this.table2.length; i++) {
        var order = {};
        order['AddEgg'] = this.table2[i].AddEgg;
        order['Amount'] = this.table2[i].Amount;
        order['Detail'] = this.table2[i].Detail;
        order['IdMenu'] = this.table2[i].IdMenu;
        order['IdOrder'] = this.table2[i].IdOrder;
        order['IdTable'] = this.numberTable;
        order['NameMenu'] = this.table2[i].NameMenu;
        order['Price'] = this.table2[i].Price;
        order['StatusBill'] = this.table2[i].StatusBill;
        order['StatusServed'] = this.table2[i].StatusServed;
        order['StatusChackBill'] = this.table2[i].StatusChackBill;

        this.crudService.addOrder(order, this.table2[i].IdOrder).then(res => {
          // console.log("แก้ DB")
        }).catch(error => {
          console.log(error);
        })

      }
    }

    if (numTable == 3) {
      for (let i = 0; i < this.table3.length; i++) {
        var order = {};
        order['AddEgg'] = this.table3[i].AddEgg;
        order['Amount'] = this.table3[i].Amount;
        order['Detail'] = this.table3[i].Detail;
        order['IdMenu'] = this.table3[i].IdMenu;
        order['IdOrder'] = this.table3[i].IdOrder;
        order['IdTable'] = this.numberTable;
        order['NameMenu'] = this.table3[i].NameMenu;
        order['Price'] = this.table3[i].Price;
        order['StatusBill'] = this.table3[i].StatusBill;
        order['StatusServed'] = this.table3[i].StatusServed;
        order['StatusChackBill'] = this.table3[i].StatusChackBill;

        this.crudService.addOrder(order, this.table3[i].IdOrder).then(res => {

        }).catch(error => {
          console.log(error);
        })

      }
    }

    if (numTable == 4) {
      for (let i = 0; i < this.table4.length; i++) {
        var order = {};
        order['AddEgg'] = this.table4[i].AddEgg;
        order['Amount'] = this.table4[i].Amount;
        order['Detail'] = this.table4[i].Detail;
        order['IdMenu'] = this.table4[i].IdMenu;
        order['IdOrder'] = this.table4[i].IdOrder;
        order['IdTable'] = this.numberTable;
        order['NameMenu'] = this.table4[i].NameMenu;
        order['Price'] = this.table4[i].Price;
        order['StatusBill'] = this.table4[i].StatusBill;
        order['StatusServed'] = this.table4[i].StatusServed;
        order['StatusChackBill'] = this.table4[i].StatusChackBill;

        this.crudService.addOrder(order, this.table4[i].IdOrder).then(res => {
          // this.ngOnInit();
        }).catch(error => {
          console.log(error);
        })

      }
    }

    // console.log(numTable)
    this.openPopup(template);
    this.addTable(numTable);
    // this.ngOnInit();
    // this.unlockTable();
    this.chackTable1 = false;
    this.chackTable2 = false;
    this.chackTable3 = false;
    this.chackTable4 = false;

  }

  addTable(numTable) {
    numTable = numTable - 1;
    var table = {};
    table['IdTable'] = this.tables[numTable].IdTable;
    table['StatusTable'] = true;
    // console.log("number:",numTable)
    // console.log("this.table:",this.tables[numTable])

    this.crudService.addTable(table, numTable).then(res => {
    }).catch(error => {
      console.log(error);
    })

    table['IdTable'] = this.numberTable;
    table['StatusTable'] = false;
    var Table: number = this.numberTable - 1;
    this.crudService.addTable(table, Table).then(res => {
    }).catch(error => {
      console.log(error);
    })

  }

  unlockTable() {
    let numTable = 1;
    var table = {};
    table['IdTable'] = 1;
    table['StatusTable'] = true;
    numTable = numTable - 1
    this.crudService.addTable(table, numTable).then(res => {
      this.ngOnInit();
    }).catch(error => {
      console.log(error);
    })

  }



  openPopup(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  async T1() {

    var orders: order[];
    await this.crudService.getOrder().then(value => {
      orders = value as order[];
    });
    // console.log("LO", orders)
    var inIF: boolean = false;
    for (let i = 0; i < orders.length; i++) {
      if (orders[i].IdTable != 1) {
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
    this.table1 = orders;

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

}
