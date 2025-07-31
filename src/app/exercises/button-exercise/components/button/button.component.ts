/* eslint-disable @typescript-eslint/class-literal-property-style */
import { Component, HostBinding } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[app-button]',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  standalone: true,
})
export class ButtonComponent {
  @HostBinding('class.primary')
  get isPrimary() {
    return true;
  }
}
