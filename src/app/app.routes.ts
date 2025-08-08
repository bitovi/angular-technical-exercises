/*
 * This file does not need any updates.
 */

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'button-exercise', pathMatch: 'full' },
  {
    path: 'button-exercise',
    loadComponent: () =>
      import('./_/button-exercise/button-exercise.component').then(
        (m) => m.ButtonExerciseComponent,
      ),
    children: [
      { path: '', redirectTo: 'ui', pathMatch: 'full' },
      {
        path: 'ui',
        loadComponent: () =>
          import('./exercises/button-exercise/ui/ui.component').then(
            (m) => m.UiComponent,
          ),
      },
      {
        path: 'demo',
        loadComponent: () =>
          import('./exercises/button-exercise/demo/demo.component').then(
            (m) => m.DemoComponent,
          ),
      },
    ],
  },
  {
    path: 'select-exercise',
    loadComponent: () =>
      import('./_/select-exercise/select-exercise.component').then(
        (m) => m.SelectExerciseComponent,
      ),
    children: [
      { path: '', redirectTo: 'ui', pathMatch: 'full' },
      {
        path: 'ui',
        loadComponent: () =>
          import('./exercises/select-exercise/ui/ui.component').then(
            (m) => m.UiComponent,
          ),
      },
      {
        path: 'demo',
        loadComponent: () =>
          import('./exercises/select-exercise/demo/demo.component').then(
            (m) => m.DemoComponent,
          ),
      },
    ],
  },
  {
    path: 'checkbox-exercise',
    loadComponent: () =>
      import('./_/checkbox-exercise/checkbox-exercise.component').then(
        (m) => m.CheckboxExerciseComponent,
      ),
    children: [
      { path: '', redirectTo: 'ui', pathMatch: 'full' },
      {
        path: 'ui',
        loadComponent: () =>
          import('./exercises/checkbox-exercise/ui/ui.component').then(
            (m) => m.UiComponent,
          ),
      },
      {
        path: 'demo',
        loadComponent: () =>
          import('./exercises/checkbox-exercise/demo/demo.component').then(
            (m) => m.DemoComponent,
          ),
      },
    ],
  },
  {
    path: 'modal-exercise',
    loadComponent: () =>
      import('./_/modal-exercise/modal-exercise.component').then(
        (m) => m.ModalExerciseComponent,
      ),
    children: [
      { path: '', redirectTo: 'ui', pathMatch: 'full' },
      {
        path: 'ui',
        loadComponent: () =>
          import('./exercises/modal-exercise/ui/ui.component').then(
            (m) => m.UiComponent,
          ),
      },
      {
        path: 'demo',
        loadComponent: () =>
          import('./exercises/modal-exercise/demo/demo.component').then(
            (m) => m.DemoComponent,
          ),
      },
    ],
  },
];
