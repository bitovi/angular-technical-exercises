import { Component, Input } from '@angular/core';

export interface Option {
  value: string;
  text: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  standalone: true,
})
export class SelectComponent {
  @Input() label = '';
  @Input() options: Option[] = [];
}
