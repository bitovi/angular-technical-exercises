import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { CheckboxIconComponent } from '../checkbox-icon/checkbox-icon.component';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  standalone: true,
  imports: [
    // CheckboxIconComponent// <-- Use this component for the check icon
  ],
})
export class CheckboxComponent {
  @Input() label = '';

  @Input() checked?: boolean = false;

  @Output() checkboxIsToggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * No code changes are needed for this method.
   */
  onCheckboxChange(event: Event): void {
    event.preventDefault();
    this.checkboxIsToggled.emit(!this.checked);
    // Prevents the checkbox from toggling so that we can control the state
    // manually
    (event.target as HTMLInputElement).checked = !!this.checked;
    return;
  }
}
