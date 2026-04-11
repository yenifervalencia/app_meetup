import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movil',
  imports: [],
  templateUrl: './movil.component.html',
  styleUrl: './movil.component.css',
  standalone: true,
})
export class MovilComponent {
  @Input() imgUrls: any = {};
}