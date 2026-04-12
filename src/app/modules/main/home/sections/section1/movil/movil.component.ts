import { Component, Input } from '@angular/core';
import { ButtonDarkComponent } from '../../../../../../shared/button-dark/button-dark.component';

@Component({
  selector: 'app-movil',
  imports: [ButtonDarkComponent],
  templateUrl: './movil.component.html',
  styleUrl: './movil.component.css',
  standalone: true,
})
export class MovilComponent {
  @Input() imgUrls: any = {};
}