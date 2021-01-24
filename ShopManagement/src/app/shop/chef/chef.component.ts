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
  public orders:order[];

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

}
