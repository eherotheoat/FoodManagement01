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


  getOrder(){
    return new Promise((rexolve, reject) => {
      this.db.list('Order').valueChanges().subscribe(value => {
        rexolve(value);
      });
    });

  }

  addTable(tables,numTable){
    console.log("service-Tables:", tables);
    console.log("service-numTable:", numTable);
    return this.db.object('Table/'+String(numTable)).set(tables);
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

  addOrderT(orderTs){

    // return this.db.list('OrderT').add(orderTs);

  }

  addOrder(Order,idOrder){
    console.log("IDorder",idOrder);
    return this.db.object('Order/'+String(idOrder)).set(Order);

  }

}
