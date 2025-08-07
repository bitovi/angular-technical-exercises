import { Component } from '@angular/core';
import { ButtonComponent } from '../components/button/button.component';

@Component({
  selector: 'app-demo-button-exercise',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  standalone: true,
  imports: [ButtonComponent],
})
export class DemoComponent {}
