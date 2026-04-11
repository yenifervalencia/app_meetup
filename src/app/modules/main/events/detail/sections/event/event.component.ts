import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css',
  standalone: true,
})
export class EventComponent {
  @Input() data: any= [];
}
