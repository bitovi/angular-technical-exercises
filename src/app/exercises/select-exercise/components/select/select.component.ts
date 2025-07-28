import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  // private _resolvedId?: string;

  // get resolvedId(): string {
  //   if (!this._resolvedId) {
  //     this._resolvedId = this.inputId || `app-select-${++uniqueIdCounter}`;
  //   }
  //   return this._resolvedId;
  // }

  @Input() label = '';
  @Input() options: Option[] = [];
  @Output() selectedOption: EventEmitter<Option> = new EventEmitter<Option>();

  ngOnInit(): void {
    this.resolvedId = this.inputId || `app-select-${getUniqueId()}`;
  }
}
