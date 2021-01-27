import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router' ;
import { AppComponent } from './app.component';

//ลูกค้า1
import { HomeComponent } from './menu/home/home.component' ;
import { OrderComponent } from './menu/order/order.component'
import { ChangeTableComponent } from './menu/change-table/change-table.component'
import { AddTableComponent } from './menu/add-table/add-table.component'

//2
import { Home2Component } from './menu2/home2/home2.component';
import { Order2Component } from './menu2/order2/order2.component';
import { AddTable2Component } from './menu2/add-table2/add-table2.component';
import { ChangeTable2Component } from './menu2/change-table2/change-table2.component';



const routes: Routes = [
    {path: '' , component:AppComponent},
    //ลูกค้า1
    {path: 'Home' , component: HomeComponent},
    {path: 'Order', component: OrderComponent},
    {path: 'ChangTable', component: ChangeTableComponent},
    {path: 'AddTable' , component: AddTableComponent},

    {path: 'Home2' , component: Home2Component},
    {path: 'Order2', component: Order2Component},
    {path: 'ChangTable2', component: ChangeTable2Component},
    {path: 'AddTable2' , component: AddTable2Component},
] ;

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{ }
export const routingComponents = [
    AppComponent,
    //ลูกค้า1
    HomeComponent , 
    OrderComponent ,
    ChangeTableComponent,
    AddTableComponent,

    Home2Component,
    Order2Component,
    ChangeTable2Component,
    AddTable2Component,
]