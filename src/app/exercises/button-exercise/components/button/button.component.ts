/* eslint-disable @typescript-eslint/class-literal-property-style */
/* eslint-disable @angular-eslint/component-selector */
import { Component, HostBinding } from '@angular/core';

@Component({
  // https://angular.dev/best-practices/a11y#augmenting-native-elements
  selector: 'button[app-button]',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  standalone: true,
})
export class ButtonComponent {
  @HostBinding('class.primary')
  get isPrimary() {
    return true;// Hardcoded as true for now, please update as needed
  }

  @HostBinding('class.secondary')
  get isSecondary() {
    return false;// Hardcoded as false for now, please update as needed
  }

  @HostBinding('class.outline')
  get isOutline() {
    return false;// Hardcoded as false for now, please update as needed
  }
}
