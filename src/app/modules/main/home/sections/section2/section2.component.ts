import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardEventComponent } from '../../../../../shared/card-event/card-event.component';

@Component({
  selector: 'app-section2',
  imports: [CardEventComponent, CommonModule],
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.css',
  standalone: true,
})
export class Section2Component {
  @Input() nearbyEvents: any[] = [];
  @Input() nextEvents: any[] = [];
}
