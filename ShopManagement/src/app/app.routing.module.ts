import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router' ;
import { AppComponent } from './app.component';


import { LoginComponent } from './shop/login/login.component';
import { ChefComponent } from './shop/chef/chef.component';


const routes: Routes = [
    {path: '' , component:AppComponent},
    {path: 'Chef' , component: ChefComponent},
    {path: 'Login' , component: LoginComponent},
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
]