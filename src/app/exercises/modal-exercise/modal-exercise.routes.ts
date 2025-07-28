import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'ui',
    loadComponent: () =>
      import('./routes/ui/ui.component').then((m) => m.UiComponent),
  },
  {
    path: 'demo',
    loadComponent: () =>
      import('./routes/demo/demo.component').then((m) => m.DemoComponent),
  },
];
