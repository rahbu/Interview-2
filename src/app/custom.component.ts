import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomComponent {}
