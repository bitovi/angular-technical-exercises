import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';
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

  @HostBinding('class.disabled')
  @Input()
  disabled?: boolean = false;

  @Output() checkedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  onCheckboxChange(event: Event): void {
    event.preventDefault();
    this.checkedChange.emit(!this.checked);
    // Prevents the checkbox from toggling so that we can control the state
    // manually
    (event.target as HTMLInputElement).checked = !!this.checked;
    return;
  }
}
