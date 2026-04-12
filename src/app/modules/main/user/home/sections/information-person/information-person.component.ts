import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-information-person',
  imports: [],
  templateUrl: './information-person.component.html',
  styleUrl: './information-person.component.css'
})
export class InformationPersonComponent {
  @Input() data: any = {}
}
