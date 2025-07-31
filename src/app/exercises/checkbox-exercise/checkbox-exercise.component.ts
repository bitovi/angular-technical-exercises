/*
 * This file does not need any updates.
 */

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageSwitcherComponent } from '../../components/page-switcher/page-switcher.component';

@Component({
  selector: 'app-checkbox-exercise',
  templateUrl: './checkbox-exercise.component.html',
  styleUrl: './checkbox-exercise.component.scss',
  standalone: true,
  imports: [RouterOutlet, PageSwitcherComponent],
})
export class CheckboxExerciseComponent {}
