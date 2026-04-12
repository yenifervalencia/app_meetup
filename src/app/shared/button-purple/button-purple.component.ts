import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-purple',
  imports: [],
  templateUrl: './button-purple.component.html',
  styleUrl: './button-purple.component.css',
  standalone: true,
})
export class ButtonPurpleComponent {
  @Input() title: string = '';
  @Input() classB: string = '';
}
