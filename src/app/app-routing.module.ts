import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// give the router somewhere to go once you config the routes
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes=[
  { path: 'heroes', // matches the url in the addres bar
    component: HeroesComponent // when nav to this route, create this comp.
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch:'full' //empty path
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  }
]

// initialize and listen
@NgModule({
  // forRoot is preliminary stuff
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
