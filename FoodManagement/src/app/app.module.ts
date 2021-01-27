import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './menu/home/home.component';
import { OrderComponent } from './menu/order/order.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ChangeTableComponent } from './menu/change-table/change-table.component';

import { AppRoutingModule, routingComponents } from './app.routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment'

import { CrudService } from './service/crud.service';

import { FormsModule } from '@angular/forms';
import { AddTableComponent } from './menu/add-table/add-table.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderComponent,
    MenuBarComponent,
    ChangeTableComponent,
    routingComponents,
    AddTableComponent,
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
