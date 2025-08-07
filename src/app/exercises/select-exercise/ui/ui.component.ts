import { Component } from '@angular/core';
import {
  Option,
  SelectComponent,
} from '../components/select/select.component';

@Component({
  selector: 'app-ui-select-exercise',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
  standalone: true,
  imports: [SelectComponent],
})
export class UiComponent {
  options: Option[] = [
    { value: 'apple', text: 'Apple' },
    { value: 'banana', text: 'Banana' },
    { value: 'cherry', text: 'Cherry' },
  ];
}
