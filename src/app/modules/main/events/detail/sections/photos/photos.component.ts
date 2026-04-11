import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photos',
  imports: [CommonModule],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css',
  standalone: true,
})
export class PhotosComponent {
  @Input() photos: any[]= [];
}
