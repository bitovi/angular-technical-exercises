/*
 * This file does not need any updates.
 */

import { Component, ElementRef, ViewChild } from '@angular/core';
import { ModalComponent } from '../../components/modal/modal.component';
import { ButtonComponent } from '../../../button-exercise/components/button/button.component';

@Component({
  selector: 'app-ui-modal-exercise',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
  standalone: true,
  imports: [ModalComponent, ButtonComponent],
})
export class UiComponent {
  @ViewChild('button', { read: ElementRef })
  buttonRef!: ElementRef<HTMLButtonElement>;

  open = false;

  toggleModal() {
    this.open = !this.open;
  }
}
