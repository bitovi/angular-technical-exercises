import { Component, Input, OnInit } from '@angular/core';
import { getUniqueId } from '../../utilities/get-unique-id';

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
export class SelectComponent implements OnInit {
  @Input() inputId?: string;

  resolvedId = '';

  @Input() label = '';
  @Input() options: Option[] = [];

  ngOnInit(): void {
    this.resolvedId = this.inputId || `app-select-${getUniqueId()}`;
  }
}
