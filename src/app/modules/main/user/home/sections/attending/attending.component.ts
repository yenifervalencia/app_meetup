import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonDarkComponent } from '../../../../../../shared/button-dark/button-dark.component';
import { ButtonPurpleComponent } from '../../../../../../shared/button-purple/button-purple.component';

@Component({
  selector: 'app-attending',
  imports: [ButtonDarkComponent, ButtonPurpleComponent, CommonModule],
  templateUrl: './attending.component.html',
  styleUrl: './attending.component.css',
})
export class AttendingComponent {
  @Input() type: string = '';
}
