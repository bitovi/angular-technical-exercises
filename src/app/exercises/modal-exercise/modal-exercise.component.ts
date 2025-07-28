import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageSwitcherComponent } from '../../components/page-switcher/page-switcher.component';

@Component({
  selector: 'app-modal-exercise',
  templateUrl: './modal-exercise.component.html',
  styleUrl: './modal-exercise.component.scss',
  standalone: true,
  imports: [RouterOutlet, PageSwitcherComponent],
})
export class ModalExerciseComponent {}
