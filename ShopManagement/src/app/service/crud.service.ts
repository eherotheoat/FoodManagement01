import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import 'firebase/firestore' ;
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private db:AngularFireDatabase , 
    // private http:HttpClient
    ) 
  {

  }


  getMenu(){
    return new Promise((rexolve, reject) => {
      this.db.list('Menu').valueChanges().subscribe(value => {
        rexolve(value);
      });
    });

  }

  getOrderB(){
    return new Promise((rexolve, reject) => {
      this.db.list('OrderB').valueChanges().subscribe(value => {
        rexolve(value);
      });
    });

  }


  getOrder(){
    return new Promise((rexolve, reject) => {
      this.db.list('Order').valueChanges().subscribe(value => {
        rexolve(value);
      });
    });

  }

  getOrderW(){
    return new Promise((rexolve, reject) => {
      this.db.list('OrderW').valueChanges().subscribe(value => {
        rexolve(value);
      });
    });

  }

  getTable(){
    return new Promise((rexolve, reject) => {
      this.db.list('Table').valueChanges().subscribe(value => {
        rexolve(value);
      });
    });
  }

  getOrderTable(){
    return new Promise((rexolve, reject) => {
      this.db.list('Order').valueChanges().subscribe(value => {
        rexolve(value);
      });
    });

  }

  getEmployees(){
    return new Promise((rexolve, reject) => {
      this.db.list('Employees').valueChanges().subscribe(value => {
        rexolve(value);
      });
    });

  }

  chackOrder(OrderedFood, numTable) {
    console.log("OrderFood", OrderedFood);
    console.log("numTable", numTable);
    var Order = {};
    Order['OrderedFood'] = OrderedFood;
    Order['IdTable'] = numTable;
    return this.db.object('OrderedFood/' + (String(numTable - 1))).set(Order);
 
  }

  Served(orderW,IdOrder){
    console.log("Served", IdOrder-1);
    return this.db.object('Order/'+String(IdOrder)).set(orderW);
  }

  addOrderW(orderW,IdOrder){
    return this.db.object('OrderW/'+String(IdOrder)).set(orderW);
  }

  addOrder(Order,idOrder){

    return this.db.object('Order/'+String(idOrder)).set(Order);

  }

  addEmployee(Employee,IdEmployee){
    return this.db.object('Employees/'+String(IdEmployee)).set(Employee);
  }

  addOrderB(orderW,IdOrder){
    return this.db.object('OrderB/'+String(IdOrder)).set(orderW);
  }

  addTable(tables, numTable) {
    return this.db.object('Table/' + String(numTable)).set(tables);
  }


}
