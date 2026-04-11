import { Component } from '@angular/core';
import { AssistanceButtonComponent } from './sections/assistance-button/assistance-button.component';
import { imgUrls, nearbyEvents } from '../../../../../utils/constants';
import { OthersComponent } from './sections/others/others.component';
import { ThemesComponent } from './sections/themes/themes.component';
import { PhotosComponent } from './sections/photos/photos.component';
import { AssistantsComponent } from './sections/assistants/assistants.component';
import { MapComponent } from './sections/map/map.component';
import { CardLocationComponent } from '../../../../shared/card-location/card-location.component';
import { DetailsComponent } from './sections/details/details.component';
import { ReviewsComponent } from './sections/reviews/reviews.component';
import { EventComponent } from './sections/event/event.component';
import { Section1Component } from './sections/section1/section1.component';

@Component({
  selector: 'app-detail',
  imports: [
    AssistanceButtonComponent,
    OthersComponent,
    ThemesComponent,
    PhotosComponent,
    AssistantsComponent,
    MapComponent,
    CardLocationComponent,
    DetailsComponent,
    ReviewsComponent,
    EventComponent,
    Section1Component
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
  standalone: true,
})
export class DetailComponent {
  public data: any = nearbyEvents[0];
  public others: any[] = [
    { address: 'Hotel, Calle 38 # 6 Norte-35, Cali, CO', ...nearbyEvents[2] },
    {
      address:
        'Unidad residencial Oasis de Pasoancho L3 - Colseguros, Cll 13 # 32-68, Cali, CO',
      ...nearbyEvents[5],
    },
    {
      address:
        'Unidad residencial Oasis de Pasoancho L3 - Colseguros, Cll 13 # 32-68, Cali, CO',
      ...nearbyEvents[6],
    },
  ];
  public imgUrl: any= imgUrls;
}
