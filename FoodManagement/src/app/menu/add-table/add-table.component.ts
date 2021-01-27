import { Component, OnInit ,TemplateRef} from '@angular/core';
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
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.css']
})
export class AddTableComponent implements OnInit {

  public tables: table [];
  public statusTable1 : boolean ;
  public statusTable2 : boolean ;
  public statusTable3 : boolean ;
  public statusTable4 : boolean ;

  constructor(
    private crudService: CrudService,
    private Firesstore: AngularFirestore,
    private modalService: BsModalService,
  ) 
  {
    this.tables = [
      {
        IdTable: 1 ,
        StatusTable: true
      },
      {
        IdTable: 2 ,
        StatusTable: true
      },
      {
        IdTable: 3 ,
        StatusTable: true
      },
      {
        IdTable: 4 ,
        StatusTable: false
      },
    ];
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

    for(let i =0 ; i<this.tables.length;i++){
      if(this.tables[i].IdTable==1){
        this.statusTable1 = this.tables[i].StatusTable ;
      }
      if(this.tables[i].IdTable==2){
        this.statusTable2 = this.tables[i].StatusTable ;
      }
      if(this.tables[i].IdTable==3){
        this.statusTable3 = this.tables[i].StatusTable ;
      }
      if(this.tables[i].IdTable==4){
        this.statusTable4 = this.tables[i].StatusTable ;
      }
    }
    

  }

  addTable(numTable){

    console.log(this.tables[numTable].IdTable);

  }



}
