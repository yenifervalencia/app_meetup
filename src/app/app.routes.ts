import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NoAuthGuard } from './core/auth/guards/noAuth.guard';
import { AuthGuard } from './core/auth/guards/auth.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },

  {
    path: '',
    canActivate: [NoAuthGuard],
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      {
        path: 'home',
        loadChildren: () => import('./modules/main/home/home.routes'),
      },
      {
        path: 'event',
        loadChildren: () => import('./modules/main/events/events.routes'),
      },
    ],
  },
  {
    path: 'main',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./modules/main/user/user.routes'),
      },
      {
        path: 'event',
        loadChildren: () => import('./modules/main/events/events.routes'),
      },
    ],
  },
];
