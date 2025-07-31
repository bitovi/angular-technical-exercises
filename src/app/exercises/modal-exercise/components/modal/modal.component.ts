/*
 * This file does not need any updates.
 */

import {
  AfterContentInit,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  inject,
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
  private host = inject(ElementRef);

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

  /**
   * Calculate starting position to calculate offset needed to position next to anchor.
   */
  private setStartingPosition(): { x: number; y: number } {
    const position = getComputedStyle(this.host.nativeElement).position;

    if (position === 'absolute') {
      const { x, y } = this.host.nativeElement.getBoundingClientRect();
      return { x, y };
    }

    return { x: 0, y: 0 };
  }

  /**
   * Return top and left position of modal based on anchor element.
   */
  private setAnchoredPosition(): void {
    if (!this.anchor) {
      return;
    }

    // Original position of model or top left corner of viewport.
    const { x: x0, y: y0 } = this.setStartingPosition();

    // Position of anchor element
    const { x, y, height } = this.anchor.getBoundingClientRect();
    // Position below anchor element with 4px margin.
    this.top = `${y - y0 + height + 4}px`;
    this.left = `${x - x0}px`;
  }

  ngAfterContentInit(): void {
    if (!this.anchor) {
      throw new Error('Anchor element is required for modal positioning.');
    }

    this.setAnchoredPosition();
  }

  onButtonClick(): void {
    this.closeRequested.emit();
    this.onClose?.();
  }
}
