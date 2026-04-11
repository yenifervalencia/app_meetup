import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },

  {
    path: '',
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
];
