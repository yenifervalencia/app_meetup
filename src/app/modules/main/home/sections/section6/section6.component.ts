import { Component, Input } from '@angular/core';
import { CardInfoComponent } from '../../../../../shared/card-info/card-info.component';

@Component({
  selector: 'app-section6',
  imports: [CardInfoComponent],
  templateUrl: './section6.component.html',
  styleUrl: './section6.component.css',
  standalone: true,
})
export class Section6Component {
  @Input() dataFriends: any = [];
}
