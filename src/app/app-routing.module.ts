import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SomeCoreComponentComponent} from './some-core-component/some-core-component.component';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: '../../projects/app1/src/app/app.module-export#App1Module'
  },
  {
    path: 'orders',
    loadChildren: '../../projects/app2/src/app/app.module-export#App2Module'
  },
  {
    path: 'second',
    component: SomeCoreComponentComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
