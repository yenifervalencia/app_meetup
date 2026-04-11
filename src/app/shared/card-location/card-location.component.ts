import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-location',
  imports: [CommonModule],
  templateUrl: './card-location.component.html',
  styleUrl: './card-location.component.css'
})
export class CardLocationComponent {
  @Input() data: any = {};
}
