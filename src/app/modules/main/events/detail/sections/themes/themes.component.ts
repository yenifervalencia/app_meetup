import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-themes',
  imports: [CommonModule],
  templateUrl: './themes.component.html',
  styleUrl: './themes.component.css'
})
export class ThemesComponent {
  @Input() data: any = [];
}
