import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
// import { CheckboxIconComponent } from '../checkbox-icon/checkbox-icon.component';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  standalone: true,
  imports: [/* CheckboxIconComponent */],
})
export class CheckboxComponent {
  @Input() label = '';

  @Output() checkedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  onCheckboxChange(event: Event): void {
    this.checkedChange.emit(!(event.target as HTMLInputElement).checked);
  }
}
