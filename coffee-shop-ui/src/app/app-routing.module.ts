import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './pages/shop/shop.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopCartComponent } from './pages/shop-cart/shop-cart.component';

const routes: Routes = [{ path: 'shop', component: ShopComponent }, { path: '', component: HomeComponent },
{ path: "settings", component: SettingsComponent }, { path: "contact", component: ContactComponent }, { path: 'home', component: HomeComponent, },
{ path: "shop-cart", component: ShopCartComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
