import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FlightCard } from '../../shared/flight-card/flight-card';
import { PageTitle } from '../../shared/page-title/page-title';

@Component({
  imports: [MatTabsModule, MatCardModule, PageTitle, FlightCard],
  selector: 'app-tracked-page',
  styleUrl: './tracked-page.scss',
  templateUrl: './tracked-page.html',
})
export class TrackedPage {
  protected readonly faStar = faStar;
}
