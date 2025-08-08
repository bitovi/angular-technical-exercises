import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckboxIconComponent } from '../checkbox-icon/checkbox-icon.component';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  standalone: true,
  imports: [CheckboxIconComponent],
})
export class CheckboxComponent {
  @Input() label = '';

  @Input() checked?: boolean = false;

  /**
   * Emits the next checked state if checkbox were to be toggled.
   * This is used to control the checkbox state from the parent component.
   */
  @Output() interactedWith: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * No code changes are needed for this method.
   */
  onCheckboxChange(event: Event): void {
    event.preventDefault();
    this.interactedWith.emit(!this.checked);
    // Prevents the checkbox from toggling so that we can control the state
    // manually
    (event.target as HTMLInputElement).checked = !!this.checked;
    return;
  }
}
