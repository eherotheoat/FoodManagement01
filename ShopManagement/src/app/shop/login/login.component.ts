import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';

import { Router } from '@angular/router'
import { CrudService } from '../../service/crud.service';

//interface
import { menu } from '../../interface/Menu';
import { order } from '../../interface/Order';
import { orderT } from '../../interface/OrderT';
import { table } from '../../interface/Table';
import { employee } from '../../interface/Employee';
import { Button } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public employees: employee[];
  public UserName: any;
  public Password: any;
  public link: string = "Cashier";
  public Log_in: boolean;

  constructor(
    private crudService: CrudService,
    private Firesstore: AngularFirestore,
    private modalService: BsModalService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.started();
  }

  async started() {
    var employees: employee[];
    await this.crudService.getEmployees().then(value => {
      employees = value as employee[];
    });
    this.employees = employees;
    console.log('employees', employees)

  }

  login(userName, password) {
    var Log_in: boolean;
    var Position: number;
    for (let i = 0; i < this.employees.length; i++) {
      if (userName == this.employees[i].Username && password == this.employees[i].Password) {
        Log_in = true;
        this.Password = '';
        this.UserName = '';
        Position = this.employees[i].Position;
        break;
      }
      else {
        this.Password = '';
        Log_in = false;
      }
    }

    if (Position == 1) {
      this.router.navigate(["/Waiter"])
    }
    if (Position == 2) {
      this.router.navigate(["/Chef"])
    }
    if (Position == 3) {
      this.router.navigate(["/Cashier"])
    }

    console.log('Log_in', Log_in);
  }

}
