import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CardsComponent } from './cards/cards.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { BuyComponent } from './buy/buy.component';
import { OrderSuccessComponent } from './order-success/order-success.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'buy',
    component: BuyComponent
  },
  {
    path: 'success',
    component: OrderSuccessComponent
  },
  {
    path: 'singup',
    component: SingupComponent
  },
  {
    path: 'product-details/:name',
    component: ProductDetailsComponent
  },
  {
    path: 'search', component: CardsComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
