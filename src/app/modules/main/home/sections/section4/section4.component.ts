import { Component, Input } from '@angular/core';
import { CardCategoryComponent } from '../../../../../shared/card-category/card-category.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section4',
  imports: [CardCategoryComponent, CommonModule],
  templateUrl: './section4.component.html',
  styleUrl: './section4.component.css',
  standalone: true,
})
export class Section4Component {
  @Input() categories: any = [];
}
