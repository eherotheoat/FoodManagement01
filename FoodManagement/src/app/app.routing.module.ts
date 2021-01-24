import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router' ;
import { AppComponent } from './app.component';

//ลูกค้า
import { HomeComponent } from './menu/home/home.component' ;
import { OrderComponent } from './menu/order/order.component'
import { ChangeTableComponent } from './menu/change-table/change-table.component'
import { AddTableComponent } from './menu/add-table/add-table.component'

//พนักงาน
import { EmployeesComponent } from './shop/employees/employees.component';


const routes: Routes = [
    {path: '' , component:AppComponent},
    //ลูกค้า
    {path: 'Home' , component: HomeComponent},
    {path: 'Order', component: OrderComponent},
    {path: 'ChangTable', component: ChangeTableComponent},
    {path: 'AddTable' , component: AddTableComponent},
    //พนักงาน
    {path: 'Employees' , component: EmployeesComponent},
] ;

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{ }
export const routingComponents = [
    //ลูกค้า
    HomeComponent , 
    OrderComponent ,
    ChangeTableComponent,
    AddTableComponent,
    //พนักงาน
    EmployeesComponent
]