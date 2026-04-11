import { Component, Input } from '@angular/core';
import { DesktopComponent } from '../desktop/desktop.component';
import { MovilComponent } from '../movil/movil.component';

@Component({
  selector: 'app-section1',
  imports: [DesktopComponent, MovilComponent],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css',
  standalone: true,
})
export class SectionComponent {
  @Input() imgUrls: any = {};
}
