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
  // eslint-disable-next-line @typescript-eslint/class-literal-property-style
  get isPrimary() {
    return true;
  }
}
