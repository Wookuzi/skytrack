import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { faGaugeHigh, faMapLocationDot, faPlane, faStar } from '@fortawesome/free-solid-svg-icons';
import { FlightCard } from '../../shared/flight-card/flight-card';
import { MapView } from '../../shared/map-view/map-view';
import { PageTitle } from '../../shared/page-title/page-title';
import { SearchFilterBar } from '../../shared/search-filter-bar/search-filter-bar';
import { StatTile } from '../../shared/stat-tile/stat-tile';

@Component({
  imports: [MatChipsModule, PageTitle, SearchFilterBar, MapView, StatTile, FlightCard],
  selector: 'app-radar-page',
  styleUrl: './radar-page.scss',
  templateUrl: './radar-page.html',
})
export class RadarPage {
  protected readonly faMapLocationDot = faMapLocationDot;
  protected readonly faPlane = faPlane;
  protected readonly faStar = faStar;
  protected readonly faGaugeHigh = faGaugeHigh;
}
