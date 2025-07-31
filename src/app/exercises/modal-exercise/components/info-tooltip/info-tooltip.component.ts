/*
 * This file does not need any updates.
 */

import { Component } from '@angular/core';
import { ButtonComponent } from '../../../button-exercise/components/button/button.component';

@Component({
  selector: 'app-info-tooltip',
  templateUrl: './info-tooltip.component.html',
  styleUrl: './info-tooltip.component.scss',
  standalone: true,
  imports: [ButtonComponent],
})
export class InfoTooltipComponent {
  open = false;

  toggleTooltip() {
    this.open = !this.open;
  }

  closeTooltip() {
    this.open = false;
  }
}
