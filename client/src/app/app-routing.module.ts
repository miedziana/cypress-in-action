import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ForecastComponent} from './forecast/forecast.component';
import {TodosComponent} from './todos/todos.component';
import {HomeComponent} from './home/home.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {UserAuthGuard} from './user.auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
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
    canActivate: [UserAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UserAuthGuard]
})
export class AppRoutingModule {


}
