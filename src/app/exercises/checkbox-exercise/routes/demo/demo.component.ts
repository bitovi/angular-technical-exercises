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
    'Pepperoni',
    'Sausage',
    'Bacon',
    'Chicken (Out of Stock)',
    'Ham',
  ]

  vegetables = [
    'Mushrooms',
    'Onions',
    'Bell peppers (Out of Stock)',
    'Black olives',
    'Pineapple',
    'Jalapenos',
    'Onions',
  ];
}
