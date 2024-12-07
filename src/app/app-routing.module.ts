import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtectedPageComponent } from './modules/protected-page/components/protected-page.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './modules/login/components/login.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: ProtectedPageComponent, canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path:'**', component: ProtectedPageComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
