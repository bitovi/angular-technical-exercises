import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-switcher',
  templateUrl: './page-switcher.component.html',
  styleUrl: './page-switcher.component.scss',
  imports: [RouterModule],
  standalone: true,
})
export class PageSwitcherComponent {}
