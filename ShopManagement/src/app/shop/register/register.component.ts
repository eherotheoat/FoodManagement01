import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';


import { CrudService } from '../../service/crud.service';

//interface
import { menu } from '../../interface/Menu';
import { order } from '../../interface/Order';
import { orderT } from '../../interface/OrderT';
import { table } from '../../interface/Table';
import { employee } from '../../interface/Employee';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public employees: employee[];
  public errorPass: boolean = false;
  public errorInput: boolean = false;

  public userName: any;
  public password: any;
  public cpassword: any;
  public position: any = 0;

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
    var employees: employee[];
    await this.crudService.getEmployees().then(value => {
      employees = value as employee[];
    });
    this.employees = employees;

  }

  register(userName, password, cpassword, position) {
    var employees = {}
    var IdEmployees: number;

    IdEmployees = this.employees.length;
    IdEmployees = IdEmployees + 1
    if (password == cpassword && userName && password && position) {
      employees['Username'] = userName;
      employees['IdEmployee'] = IdEmployees;
      employees['Password'] = password;
      employees['Position'] = position;
      this.errorInput = false;
      this.errorPass = false;
      console.log('employees', employees);

      this.crudService.addEmployee(employees, IdEmployees - 1).then(res => {

      }).catch(error => {
        console.log(error);
      })

    }
    if (password != cpassword) {
      this.errorPass = true;
      this.errorInput = false;
    }
    if (userName == null || password == null || position == null) {
      this.errorInput = true;
      this.errorPass = false;
    }

    this.ngOnInit();
    this.userName = '';
    this.password = '';
    this.cpassword = '';
    this.position = 0;

}

}
