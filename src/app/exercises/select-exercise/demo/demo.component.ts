import { Component } from '@angular/core';
import { Option, SelectComponent } from '../components/select/select.component';
import { ButtonComponent } from '../../button-exercise/components/button/button.component';

@Component({
  selector: 'app-demo-select-exercise',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  standalone: true,
  imports: [SelectComponent, ButtonComponent],
})
export class DemoComponent {
  years: Option[] = [
    { value: '2020', text: '2020' },
    { value: '2021', text: '2021' },
    { value: '2022', text: '2022' },
  ];

  makes: Option[] = [
    { value: 'toyota', text: 'Toyota' },
    { value: 'honda', text: 'Honda' },
    { value: 'ford', text: 'Ford' },
  ];

  models: Option[] = [
    { value: 'camry', text: 'Camry' },
    { value: 'civic', text: 'Civic' },
    { value: 'mustang', text: 'Mustang' },
  ];
}
