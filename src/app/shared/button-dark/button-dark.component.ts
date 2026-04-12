import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-dark',
  imports: [],
  templateUrl: './button-dark.component.html',
  styleUrl: './button-dark.component.css',
  standalone: true
})
export class ButtonDarkComponent {
  @Input() title: string = '';
  @Input() classB: string = '';
}
