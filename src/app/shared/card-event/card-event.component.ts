import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-event',
  imports: [CommonModule],
  templateUrl: './card-event.component.html',
  styleUrl: './card-event.component.css',
  standalone: true,
})
export class CardEventComponent {
  @Input() data: any = {};
  @Input() is_extra: boolean = false;
}
