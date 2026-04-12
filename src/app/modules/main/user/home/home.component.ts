import { Component } from '@angular/core';
import { ForYouComponent } from './sections/for-you/for-you.component';
import { nearbyEvents } from '../../../../../utils/constants';
import { GroupsComponent } from './sections/groups/groups.component';
import { InformationPersonComponent } from './sections/information-person/information-person.component';
import { YourGroupsComponent } from './sections/your-groups/your-groups.component';
import { AttendingComponent } from './sections/attending/attending.component';

@Component({
  selector: 'app-home',
  imports: [
    ForYouComponent,
    GroupsComponent,
    InformationPersonComponent,
    YourGroupsComponent,
    AttendingComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public nearbyEvents: any[] = nearbyEvents;
  public dataPersonal: any = {
    name: 'Prueba',
    city: 'Cali',
  };
}
