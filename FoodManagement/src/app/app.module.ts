import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
// โต๊ะ 1
import { HomeComponent } from './menu/home/home.component';
import { OrderComponent } from './menu/order/order.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ChangeTableComponent } from './menu/change-table/change-table.component';
import { AddTableComponent } from './menu/add-table/add-table.component';
// โต๊ะ2
import { Home2Component } from './menu2/home2/home2.component';
import { Order2Component } from './menu2/order2/order2.component';
import { AddTable2Component } from './menu2/add-table2/add-table2.component';
import { ChangeTable2Component } from './menu2/change-table2/change-table2.component';

import { AppRoutingModule, routingComponents } from './app.routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment'

import { CrudService } from './service/crud.service';

import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Bar2Component } from './menu2/bar2/bar2.component';
import { BarComponent } from './menu/bar/bar.component';
import { AddTable3Component } from './menu3/add-table3/add-table3.component';
import { Bar3Component } from './menu3/bar3/bar3.component';
import { ChangeTable3Component } from './menu3/change-table3/change-table3.component';
import { Home3Component } from './menu3/home3/home3.component';
import { Order3Component } from './menu3/order3/order3.component';
import { Order4Component } from './menu4/order4/order4.component';
import { Home4Component } from './menu4/home4/home4.component';
import { ChangeTable4Component } from './menu4/change-table4/change-table4.component';
import { Bar4Component } from './menu4/bar4/bar4.component';
import { AddTable4Component } from './menu4/add-table4/add-table4.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderComponent,
    MenuBarComponent,
    ChangeTableComponent,
    routingComponents,
    AddTableComponent,
    Home2Component,
    Order2Component,
    AddTable2Component,
    ChangeTable2Component,
    Bar2Component,
    BarComponent,
    AddTable3Component,
    Bar3Component,
    ChangeTable3Component,
    Home3Component,
    Order3Component,
    Order4Component,
    Home4Component,
    ChangeTable4Component,
    Bar4Component,
    AddTable4Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ModalModule.forRoot(),
    CommonModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
