import { Component, OnInit ,TemplateRef } from '@angular/core';
import { BsModalService , BsModalRef } from 'ngx-bootstrap/modal';

import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore' ;


import { CrudService } from '../../service/crud.service';

//interface
import { menu } from '../../interface/Menu';
import { order } from '../../interface/Order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public menus: menu[] ;
  public selectMenu: menu[];
  public orders:order[];

  modalRef: BsModalRef;

  public amount : string;
  public detail : string;
  public addEgg : boolean;
  
  constructor(
    private crudService:CrudService,
    private Firesstore: AngularFirestore,
    private modalService: BsModalService,
    ) 
  {

  }

  ngOnInit() {
    this.started();
  }

  async started(){
    var menus : menu[];
    await this.crudService.getMenu().then(value => {
      menus = value as menu[];
    });

    this.menus = menus;


  }

  addOrder(amount, detail ,addEgg,template){
    this.openPopup(template)
    console.log(this.amount, detail ,addEgg)
    this.clearValue()
  }

  openPopup(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

  clearValue(){
    this.amount = '';
    this.detail = '';
    this.addEgg = false;
  }

}
