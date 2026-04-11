import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-desktop',
  imports: [],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.css',
  standalone: true,
})
export class DesktopComponent {
  @Input() imgUrls: any = {};
}
