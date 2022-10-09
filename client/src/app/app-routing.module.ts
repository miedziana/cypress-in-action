import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ForecastComponent} from './forecast/forecast.component';
import {TodosComponent} from './todos/todos.component';
import {HomeComponent} from './home/home.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {AuthGuard} from '@auth0/auth0-angular';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'forecast',
    component: ForecastComponent,
  },
  {
    path: 'todos',
    component: TodosComponent,
  },
  {
    path: 'me',
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
