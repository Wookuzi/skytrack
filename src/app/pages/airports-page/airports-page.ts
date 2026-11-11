import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { AirportCard } from '../../shared/airport-card/airport-card';
import { PageTitle } from '../../shared/page-title/page-title';
import { SearchFilterBar } from '../../shared/search-filter-bar/search-filter-bar';

@Component({
  imports: [MatChipsModule, PageTitle, SearchFilterBar, AirportCard],
  selector: 'app-airports-page',
  styleUrl: './airports-page.scss',
  templateUrl: './airports-page.html',
})
export class AirportsPage {
  protected readonly faPlaneDeparture = faPlaneDeparture;
}
