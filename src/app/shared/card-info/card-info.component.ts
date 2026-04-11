import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-info',
  imports: [],
  templateUrl: './card-info.component.html',
  styleUrl: './card-info.component.css',
})
export class CardInfoComponent {
  @Input() data: any = {};
}
