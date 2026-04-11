import { Component, Input } from '@angular/core';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-details',
  imports: [MapComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  standalone: true,
})
export class DetailsComponent {
  @Input() data: any = {};  
}
