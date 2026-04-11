import { Component, Input } from '@angular/core';
import { CardEventComponent } from '../../../../../../shared/card-event/card-event.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-others',
  imports: [CardEventComponent, CommonModule],
  templateUrl: './others.component.html',
  styleUrl: './others.component.css',
  standalone: true,
})
export class OthersComponent {
  @Input() set events(value: any[]){
    this.eventsAux = value.map(({ amount, ...rest }) => rest);
  }
  public eventsAux: any[]=[];

}
