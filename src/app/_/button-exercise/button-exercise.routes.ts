/*
 * This file does not need any updates.
 */

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'ui',
    loadComponent: () =>
      import('../../exercises/button-exercise/ui/ui.component').then((m) => m.UiComponent),
  },
  {
    path: 'demo',
    loadComponent: () =>
      import('../../exercises/button-exercise/demo/demo.component').then((m) => m.DemoComponent),
  },
];
