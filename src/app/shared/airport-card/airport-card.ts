import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';

/** Kartica letališča s kodama IATA in ICAO. */
@Component({
  imports: [MatCardModule, FaIconComponent],
  selector: 'app-airport-card',
  styleUrl: './airport-card.scss',
  templateUrl: './airport-card.html',
})
export class AirportCard {
  readonly name = input.required<string>();
  readonly city = input.required<string>();
  readonly country = input.required<string>();
  readonly iata = input.required<string>();
  readonly icao = input.required<string>();

  protected readonly faPlaneDeparture = faPlaneDeparture;
}
