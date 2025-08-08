import { Component } from '@angular/core';
import { CheckboxComponent } from '../components/checkbox/checkbox.component';

@Component({
  selector: 'app-ui-checkbox-exercise',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
  standalone: true,
  imports: [CheckboxComponent],
})
export class UiComponent {
  onCheckboxInteracted(nextCheckedState: boolean): void {
    console.log('Checkbox interacted -> next state:', nextCheckedState);
  }
}
