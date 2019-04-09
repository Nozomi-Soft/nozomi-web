import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [   
    UserDetailsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'user:username', component: UserDetailsComponent }
    ]),
  ]
})
export class UserModule { }
