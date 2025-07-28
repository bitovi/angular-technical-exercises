import { Component } from '@angular/core';
import { CheckboxComponent } from '../../components/checkbox/checkbox.component';

@Component({
  selector: 'app-ui-button-exercise',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
  standalone: true,
  imports: [CheckboxComponent],
})
export class UiComponent {
  onCheckboxChange(checked: boolean): void {
    console.log('Checkbox changed:', checked);
  }
}
