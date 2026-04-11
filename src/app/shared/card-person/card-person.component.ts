import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-person',
  imports: [CommonModule],
  templateUrl: './card-person.component.html',
  styleUrl: './card-person.component.css'
})
export class CardPersonComponent {
  @Input() data: any = {};
}
