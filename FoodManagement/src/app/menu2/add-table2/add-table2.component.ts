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
  selector: 'app-add-table2',
  templateUrl: './add-table2.component.html',
  styleUrls: ['./add-table2.component.css']
})
export class AddTable2Component implements OnInit {

  public tables: table[];
  public statusTable1: boolean;
  public statusTable2: boolean;
  public statusTable3: boolean;
  public statusTable4: boolean;

  modalRef: BsModalRef;

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
    var tables: table[];

    await this.crudService.getTable().then(value => {
      tables = value as table[];
    });

    this.tables = tables;
    console.log(this.tables)

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


  }

  addTable(numTable, template) {
    numTable = numTable;
    var table = {};
    table['IdTable'] = this.tables[numTable].IdTable;
    table['StatusTable'] = false;
    // console.log("number:",numTable)
    // console.log("this.table:",this.tables[numTable])

    this.crudService.addTable(table, numTable).then(res => {
      this.ngOnInit();
      this.openPopup(template);
    }).catch(error => {
      console.log(error);
    })

  }

  openPopup(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
