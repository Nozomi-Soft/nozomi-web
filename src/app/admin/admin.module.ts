import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { UsersListComponent } from '../users/users-list/users-list.component';
import { SharedModule } from '../shared/shared.module';

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
