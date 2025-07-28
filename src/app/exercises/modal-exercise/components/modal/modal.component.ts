import {
  AfterContentInit,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';
import { ButtonComponent } from '../../../button-exercise/components/button/button.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  standalone: true,
  imports: [ButtonComponent],
})
export class ModalComponent implements AfterContentInit {
  @Input() anchor?: {
    getBoundingClientRect: () => {
      x: number;
      y: number;
      height: number;
    };
  };

  @Input() onClose?: () => void;

  @Output() closeRequested = new EventEmitter<void>();

  @HostBinding('style.top')
  top?: string;

  @HostBinding('style.left')
  left?: string;

  private setPosition(): void {
    if (!this.anchor) {
      return;
    }

    const { x, y, height } = this.anchor.getBoundingClientRect();
    this.top = `${y + height + 4}px`;
    this.left = `${x}px`;
  }

  ngAfterContentInit(): void {
    if (!this.anchor) {
      throw new Error('Anchor element is required for modal positioning.');
    }

    this.setPosition();
  }

  onButtonClick(): void {
    this.closeRequested.emit();
    this.onClose?.();
  }
}
