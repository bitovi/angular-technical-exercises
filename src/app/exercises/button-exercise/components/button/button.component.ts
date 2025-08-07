/* eslint-disable @angular-eslint/component-selector */
import { Component, HostBinding, Input } from '@angular/core';

@Component({
  // https://angular.dev/best-practices/a11y#augmenting-native-elements
  selector: 'button[app-button]',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  standalone: true,
})
export class ButtonComponent {
  @Input() appearance: 'primary' | 'secondary' | 'outline' = 'primary';

  @HostBinding('class.primary')
  get isPrimary() {
    return !this.appearance || this.appearance === 'primary';
  }

  @HostBinding('class.secondary')
  get isSecondary() {
    return this.appearance === 'secondary';
  }

  @HostBinding('class.outline')
  get isOutline() {
    return this.appearance === 'outline';
  }
}
