import { Component, Input } from '@angular/core';
import { ButtonDarkComponent } from '../../../../../../shared/button-dark/button-dark.component';

@Component({
  selector: 'app-desktop',
  imports: [ButtonDarkComponent],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.css',
  standalone: true,
})
export class DesktopComponent {
  @Input() imgUrls: any = {};
}
