import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserModule } from './users/user.module';
import { AdminModule } from './admin/admin.module';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AdminModule,
    UserModule  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
