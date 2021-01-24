import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

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
import { IoginComponent } from './shop/iogin/iogin.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ChefComponent } from './shop/chef/chef.component';
import { WaiterComponent } from './shop/waiter/waiter.component';

@NgModule({
  declarations: [
    AppComponent,
    IoginComponent,
    MenuBarComponent,
    AppComponent,
    MenuBarComponent,
    routingComponents,
    ChefComponent,
    WaiterComponent,
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
    ModalModule.forRoot()
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
