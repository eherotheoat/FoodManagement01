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

//3
import { AddTable3Component } from './menu3/add-table3/add-table3.component';
import { ChangeTable3Component } from './menu3/change-table3/change-table3.component';
import { Home3Component } from './menu3/home3/home3.component';
import { Order3Component } from './menu3/order3/order3.component';

//3
import { Order4Component } from './menu4/order4/order4.component';
import { Home4Component } from './menu4/home4/home4.component';
import { ChangeTable4Component } from './menu4/change-table4/change-table4.component';
import { Bar4Component } from './menu4/bar4/bar4.component';
import { AddTable4Component } from './menu4/add-table4/add-table4.component';



const routes: Routes = [
    {path: '' , component:AppComponent},
    //1
    {path: 'Home' , component: HomeComponent},
    {path: 'Order', component: OrderComponent},
    {path: 'ChangTable', component: ChangeTableComponent},
    {path: 'AddTable' , component: AddTableComponent},
    //2
    {path: 'Home2' , component: Home2Component},
    {path: 'Order2', component: Order2Component},
    {path: 'ChangTable2', component: ChangeTable2Component},
    {path: 'AddTable2' , component: AddTable2Component},
    //3
    {path: 'Home3' , component: Home3Component},
    {path: 'Order3', component: Order3Component},
    {path: 'ChangTable3', component: ChangeTable3Component},
    {path: 'AddTable3' , component: AddTable3Component},
    //4
    {path: 'Home4' , component: Home4Component},
    {path: 'Order4', component: Order4Component},
    {path: 'ChangTable4', component: ChangeTable4Component},
    {path: 'AddTable4' , component: AddTable4Component},
] ;

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{ }
export const routingComponents = [
    AppComponent,
    //1
    HomeComponent , 
    OrderComponent ,
    ChangeTableComponent,
    AddTableComponent,
    //2
    Home2Component,
    Order2Component,
    ChangeTable2Component,
    AddTable2Component,
    //3
    Home3Component,
    Order3Component,
    ChangeTable3Component,
    AddTable3Component,
    //4
    Home4Component,
    Order4Component,
    ChangeTable4Component,
    AddTable4Component
]