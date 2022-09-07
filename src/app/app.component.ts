import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}

// 1. We want a new component 'custom' that shows a number between 1 and 10 with a button on the left '-' and a button on the right '+' that decrement and increment respectively.

// 2. Set up app.component.ts as a form with three fields: area, total, and rate.  The area field should use the new custom component.

// 3. Can you modify the form so that whenever either total or rate are modified, the other input switches according to the formula rate = total/area.
