import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'button-exercise', pathMatch: 'full' },
  {
    path: 'button-exercise',
    loadComponent: () =>
      import('./exercises/button-exercise/button-exercise.component').then(
        (m) => m.ButtonExerciseComponent,
      ),
    children: [
      { path: '', redirectTo: 'ui', pathMatch: 'full' },
      {
        path: 'ui',
        loadComponent: () =>
          import('./exercises/button-exercise/routes/ui/ui.component').then(
            (m) => m.UiComponent,
          ),
      },
      {
        path: 'demo',
        loadComponent: () =>
          import('./exercises/button-exercise/routes/demo/demo.component').then(
            (m) => m.DemoComponent,
          ),
      },
    ],
  },
  {
    path: 'select-exercise',
    loadComponent: () =>
      import('./exercises/select-exercise/select-exercise.component').then(
        (m) => m.SelectExerciseComponent,
      ),
    children: [
      { path: '', redirectTo: 'ui', pathMatch: 'full' },
      {
        path: 'ui',
        loadComponent: () =>
          import('./exercises/select-exercise/routes/ui/ui.component').then(
            (m) => m.UiComponent,
          ),
      },
      {
        path: 'demo',
        loadComponent: () =>
          import('./exercises/select-exercise/routes/demo/demo.component').then(
            (m) => m.DemoComponent,
          ),
      },
    ],
  },
  {
    path: 'checkbox-exercise',
    loadComponent: () =>
      import('./exercises/checkbox-exercise/checkbox-exercise.component').then(
        (m) => m.CheckboxExerciseComponent,
      ),
    children: [
      { path: '', redirectTo: 'ui', pathMatch: 'full' },
      {
        path: 'ui',
        loadComponent: () =>
          import('./exercises/checkbox-exercise/routes/ui/ui.component').then(
            (m) => m.UiComponent,
          ),
      },
      {
        path: 'demo',
        loadComponent: () =>
          import(
            './exercises/checkbox-exercise/routes/demo/demo.component'
          ).then((m) => m.DemoComponent),
      },
    ],
  },
  {
    path: 'modal-exercise',
    loadComponent: () =>
      import('./exercises/modal-exercise/modal-exercise.component').then(
        (m) => m.ModalExerciseComponent,
      ),
    children: [
      { path: '', redirectTo: 'ui', pathMatch: 'full' },
      {
        path: 'ui',
        loadComponent: () =>
          import('./exercises/modal-exercise/routes/ui/ui.component').then(
            (m) => m.UiComponent,
          ),
      },
      {
        path: 'demo',
        loadComponent: () =>
          import('./exercises/modal-exercise/routes/demo/demo.component').then(
            (m) => m.DemoComponent,
          ),
      },
    ],
  },
];
