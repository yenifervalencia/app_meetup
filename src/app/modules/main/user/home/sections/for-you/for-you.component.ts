import { Component, Input } from '@angular/core';
import { CardEventComponent } from '../../../../../../shared/card-event/card-event.component';
import { CommonModule } from '@angular/common';
import { ButtonPurpleComponent } from '../../../../../../shared/button-purple/button-purple.component';

@Component({
  selector: 'app-for-you',
  imports: [CardEventComponent, CommonModule, ButtonPurpleComponent],
  templateUrl: './for-you.component.html',
  styleUrl: './for-you.component.css',
  standalone: true
})
export class ForYouComponent {
  @Input() events: any[] = [];
}
