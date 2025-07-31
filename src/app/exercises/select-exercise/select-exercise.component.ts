/*
 * This file does not need any updates.
 */

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageSwitcherComponent } from '../../components/page-switcher/page-switcher.component';

@Component({
  selector: 'app-select-exercise',
  templateUrl: './select-exercise.component.html',
  styleUrl: './select-exercise.component.scss',
  standalone: true,
  imports: [RouterOutlet, PageSwitcherComponent],
})
export class SelectExerciseComponent {}
