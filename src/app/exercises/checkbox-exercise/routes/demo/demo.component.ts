import { Component } from '@angular/core';
import { CheckboxComponent } from '../../components/checkbox/checkbox.component';
import { ButtonComponent } from '../../../button-exercise/components/button/button.component';

@Component({
  selector: 'app-demo-checkbout-exercise',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  standalone: true,
  imports: [CheckboxComponent, ButtonComponent],
})
export class DemoComponent {
  meats = [
    { text: 'Pepperoni', checked: true },
    { text: 'Sausage' },
    { text: 'Bacon' },
    { text: 'Chicken (Out of Stock)', disabled: true },
    { text: 'Ham' },
  ];

  vegetables: { text: string; checked?: boolean; disabled?: boolean }[] = [
    { text: 'Mushrooms' },
    { text: 'Onions' },
    { text: 'Bell peppers (Out of Stock)', disabled: true },
    { text: 'Black olives' },
    { text: 'Pineapple' },
    { text: 'Jalapenos' },
    { text: 'Onions' },
  ];

  toggleCheckbox(element: { checked?: boolean }): void {
    element.checked = !element.checked;
  }
}
