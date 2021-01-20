import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './menu/home/home.component';
import { OrderComponent } from './menu/order/order.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ChangeTableComponent } from './menu/change-table/change-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderComponent,
    MenuBarComponent,
    ChangeTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
