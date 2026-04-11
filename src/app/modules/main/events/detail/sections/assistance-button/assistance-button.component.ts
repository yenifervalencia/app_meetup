import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-assistance-button',
  imports: [],
  templateUrl: './assistance-button.component.html',
  styleUrl: './assistance-button.component.css',
  standalone: true,
})
export class AssistanceButtonComponent {
  @Input() data: any = {};
}
