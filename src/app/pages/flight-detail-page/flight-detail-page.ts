import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faArrowLeft,
  faArrowsUpDown,
  faCompass,
  faGaugeHigh,
  faMountain,
  faPlane,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FlightCard } from '../../shared/flight-card/flight-card';
import { MapView } from '../../shared/map-view/map-view';
import { PageTitle } from '../../shared/page-title/page-title';
import { StatTile } from '../../shared/stat-tile/stat-tile';

/** Podrobnosti leta. V tej vaji vedno prikaže vzorčni let RYR5PC. */
@Component({
  imports: [
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    FaIconComponent,
    PageTitle,
    MapView,
    StatTile,
    FlightCard,
  ],
  selector: 'app-flight-detail-page',
  styleUrl: './flight-detail-page.scss',
  templateUrl: './flight-detail-page.html',
})
export class FlightDetailPage {
  protected readonly faArrowLeft = faArrowLeft;
  protected readonly faPlane = faPlane;
  protected readonly faStar = faStar;
  protected readonly faMountain = faMountain;
  protected readonly faGaugeHigh = faGaugeHigh;
  protected readonly faCompass = faCompass;
  protected readonly faArrowsUpDown = faArrowsUpDown;
}
