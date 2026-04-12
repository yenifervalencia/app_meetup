import { Component, Input } from '@angular/core';
import { ButtonDarkComponent } from '../../../../../shared/button-dark/button-dark.component';

@Component({
  selector: 'app-section3',
  imports: [ButtonDarkComponent],
  templateUrl: './section3.component.html',
  styleUrl: './section3.component.css',
  standalone: true,
})
export class Section3Component {
  @Input() imgUrls: any= {};
}
