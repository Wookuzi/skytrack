import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faArrowRight,
  faGaugeHigh,
  faMapLocationDot,
  faPlane,
  faRoute,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FlightCard } from '../../shared/flight-card/flight-card';
import { Gauge } from '../../shared/gauge/gauge';
import { MapView } from '../../shared/map-view/map-view';
import { PageTitle } from '../../shared/page-title/page-title';
import { SearchFilterBar } from '../../shared/search-filter-bar/search-filter-bar';
import { StatTile } from '../../shared/stat-tile/stat-tile';

@Component({
  imports: [
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    FaIconComponent,
    PageTitle,
    SearchFilterBar,
    MapView,
    StatTile,
    FlightCard,
    Gauge,
  ],
  selector: 'app-radar-page',
  styleUrl: './radar-page.scss',
  templateUrl: './radar-page.html',
})
export class RadarPage {
  protected readonly faMapLocationDot = faMapLocationDot;
  protected readonly faPlane = faPlane;
  protected readonly faStar = faStar;
  protected readonly faGaugeHigh = faGaugeHigh;
  protected readonly faRoute = faRoute;
  protected readonly faArrowRight = faArrowRight;
}
