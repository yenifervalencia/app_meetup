import { Component } from '@angular/core';
import { SectionComponent } from './sections/section1/section/section.component';
import { Section2Component } from './sections/section2/section2.component';
import { Section3Component } from './sections/section3/section3.component';
import { Section4Component } from './sections/section4/section4.component';
import { Section5Component } from './sections/section5/section5.component';
import { Section6Component } from './sections/section6/section6.component';
import {
  categories,
  dataFriends,
  imgUrls,
  nearbyEvents,
  nextEvents,
} from '../../../../utils/constants';

@Component({
  selector: 'app-home',
  imports: [
    SectionComponent,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  public imgUrls: any = imgUrls;
  public nearbyEvents: any[] = nearbyEvents;
  public nextEvents: any[] = nextEvents;
  public categories: any[] = categories;
  public dataFriends: any[] = dataFriends;
  
}
