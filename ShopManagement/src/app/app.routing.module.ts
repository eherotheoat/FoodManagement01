import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router' ;
import { AppComponent } from './app.component';

import { IoginComponent } from './shop/iogin/iogin.component';
import { ChefComponent } from './shop/chef/chef.component';
import { WaiterComponent } from './shop/waiter/waiter.component';


const routes: Routes = [
    {path: '' , component:AppComponent},
    {path: 'Ligin', component: IoginComponent},
    {path: 'Chef', component: ChefComponent},
    {path: 'Waiter', component: WaiterComponent},
] ;

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{ }
export const routingComponents = [
    AppComponent,
    IoginComponent,
    ChefComponent,
    WaiterComponent,
]