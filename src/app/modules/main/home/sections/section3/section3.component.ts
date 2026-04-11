import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section3',
  imports: [],
  templateUrl: './section3.component.html',
  styleUrl: './section3.component.css',
  standalone: true,
})
export class Section3Component {
  @Input() imgUrls: any= {};
}
