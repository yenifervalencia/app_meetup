import { Component, Input } from '@angular/core';
import { CardPersonComponent } from '../../../../../../shared/card-person/card-person.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assistants',
  imports: [CommonModule, CardPersonComponent],
  templateUrl: './assistants.component.html',
  styleUrl: './assistants.component.css',
})
export class AssistantsComponent {
  @Input() data: any[] = [];
}
