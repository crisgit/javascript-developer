import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';

const routes: Routes = [
  { path:'', component: TitleComponent, pathMatch:'full'},
  //portifolio
  { path:'portifolio', component: CardComponent, children:[
    //portifolio/id
    { path:':id', component: CardComponent},
    //portifolio/id/token -> portifolio/1/abc
    { path:':id/:token', component: CardComponent},
  ]},
  //portifolio/id com prefix
  // { path:'portifolio/:id', component: CardComponent, pathMatch:'prefix'},
  { path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
