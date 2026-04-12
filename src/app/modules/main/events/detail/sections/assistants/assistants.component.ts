import { Component, Input } from '@angular/core';
import { CardPersonComponent } from '../../../../../../shared/card-person/card-person.component';
import { CommonModule } from '@angular/common';
import { ButtonPurpleComponent } from '../../../../../../shared/button-purple/button-purple.component';

@Component({
  selector: 'app-assistants',
  imports: [CommonModule, CardPersonComponent, ButtonPurpleComponent],
  templateUrl: './assistants.component.html',
  styleUrl: './assistants.component.css',
})
export class AssistantsComponent {
  @Input() data: any[] = [];
}
