import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'users', component: UsersListComponent }
    ]
  }
];

@NgModule({
  declarations: [AdminComponent, UsersListComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
