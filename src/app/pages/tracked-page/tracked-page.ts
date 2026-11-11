import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink } from '@angular/router';
import { faBell, faNoteSticky, faStar } from '@fortawesome/free-solid-svg-icons';
import { EmptyState } from '../../shared/empty-state/empty-state';
import { FlightCard } from '../../shared/flight-card/flight-card';
import { MessageCard } from '../../shared/message-card/message-card';
import { PageTitle } from '../../shared/page-title/page-title';

@Component({
  imports: [RouterLink, MatTabsModule, MatButtonModule, PageTitle, FlightCard, MessageCard, EmptyState],
  selector: 'app-tracked-page',
  styleUrl: './tracked-page.scss',
  templateUrl: './tracked-page.html',
})
export class TrackedPage {
  protected readonly faStar = faStar;
  protected readonly faNoteSticky = faNoteSticky;
  protected readonly faBell = faBell;
}
