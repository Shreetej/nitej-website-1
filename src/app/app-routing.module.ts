import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/components/home/home.component';
import { ProductsComponent } from './Components/components/products/products.component';
import { ServicesComponent } from './Components/components/services/services.component';
import { AboutComponent } from './Components/components/about/about.component';
import { LoginComponent } from './Components/components/login/login.component';
import { GetStartedComponent } from './Components/components/get-started/get-started.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'get-started', component: GetStartedComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
