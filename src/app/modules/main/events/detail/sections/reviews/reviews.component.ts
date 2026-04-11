import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reviews',
  imports: [],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css',
  standalone: true,
})
export class ReviewsComponent {
  @Input() data: any = {};
}
