import { Component, Input } from '@angular/core';
import { ButtonDarkComponent } from '../../../../../../shared/button-dark/button-dark.component';
import { ButtonPurpleComponent } from '../../../../../../shared/button-purple/button-purple.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-your-groups',
  imports: [ButtonDarkComponent, ButtonPurpleComponent, CommonModule],
  templateUrl: './your-groups.component.html',
  styleUrl: './your-groups.component.css',
  standalone: true,
})
export class YourGroupsComponent {
  @Input() type: string = '';
}
