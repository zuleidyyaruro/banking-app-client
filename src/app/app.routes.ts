import { Routes } from '@angular/router';
import { LayoutComponent } from './banking/pages/layout/layout.component';
import { HomeComponent } from './banking/pages/home/home.component';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';
import { DashboardComponent } from './banking/pages/dashboard/dashboard.component';
import { authGuard } from './auth/utils/auth-guard';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,

    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuard],
      },
    ],
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./auth/pages/login/login.component').then(
        (component) => component.LoginComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./auth/pages/register/register.component').then(
        (component) => component.RegisterComponent
      ),
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' },
];
