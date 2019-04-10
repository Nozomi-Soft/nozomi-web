import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SharedModule } from '../shared/shared.module';
import { NewUserComponent } from './new-user/new-user.component';

@NgModule({
  declarations: [   
    UserDetailsComponent, NewUserComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'user:username', component: UserDetailsComponent },
      { path: 'new-user', component: NewUserComponent }
    ]),
  ]
})
export class UserModule { }
