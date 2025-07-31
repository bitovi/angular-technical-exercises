import { Component, ElementRef, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { ButtonComponent } from '../../../button-exercise/components/button/button.component';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  standalone: true,
  imports: [ButtonComponent, ModalComponent],
})
export class MainContentComponent {
  @ViewChild('button', { read: ElementRef })
  buttonRef!: ElementRef<HTMLButtonElement>;

  open = false;

  openModal() {
    this.open = true;
  }

  closeModal() {
    this.open = false;
  }
}
