import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/components/home/home.component';
import { MenuComponent } from './features/components/menu/menu.component';
import { FranchiseComponent } from './features/components/franchise/franchise.component';
import { ContactComponent } from './features/components/contact/contact.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent 
  },
  {
    path:'menu',component:MenuComponent
  },
  {
    path:'franchise',component:FranchiseComponent
  },
  {
    path:'contact',component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
