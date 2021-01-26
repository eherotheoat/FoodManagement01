import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore' ;

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private fireservices:AngularFirestore) {

  }


  getMenu(){
    return new Promise((rexolve, reject) => {
      this.fireservices.collection('Menu').valueChanges().subscribe(value => {
        rexolve(value);
      });
    });

  }

  getOrder(){
    return new Promise((rexolve, reject) => {
      this.fireservices.collection('Order').valueChanges().subscribe(value => {
        rexolve(value);
      });
    });

  }

  getOrderTable(){
    return new Promise((rexolve, reject) => {
      this.fireservices.collection('Order').valueChanges().subscribe(value => {
        rexolve(value);
      });
    });

  }

  addOrderT(orderTs){

    return this.fireservices.collection('OrderT').add(orderTs);

  }

  addOrder(Order){

    return this.fireservices.collection('Order').add(Order);

  }


}
