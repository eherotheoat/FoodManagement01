import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router' ;
import { AppComponent } from './app.component';


import { LoginComponent } from './shop/login/login.component';
import { ChefComponent } from './shop/chef/chef.component';
import { WaiterComponent } from './shop/waiter/waiter.component';
import { CashierComponent } from './shop/cashier/cashier.component';

const routes: Routes = [
    {path: '' , component:AppComponent},
    {path: 'Chef' , component: ChefComponent},
    {path: 'Login' , component: LoginComponent},
    {path: 'Waiter' , component: WaiterComponent},
    {path: 'Cashier' , component: CashierComponent},
] ;

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{ }
export const routingComponents = [
    AppComponent,
    ChefComponent,
    LoginComponent,
    WaiterComponent,
    CashierComponent
]