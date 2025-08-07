import { Component } from '@angular/core';
import { CheckboxComponent } from '../components/checkbox/checkbox.component';
import { ButtonComponent } from '../../button-exercise/components/button/button.component';

@Component({
  selector: 'app-demo-checkout-exercise',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  standalone: true,
  imports: [CheckboxComponent, ButtonComponent],
})
export class DemoComponent {
  meats = ['Pepperoni', 'Sausage', 'Chicken (Out of Stock)'];

  vegetables = ['Bell peppers (Out of Stock)', 'Jalapenos', 'Onions'];
}
