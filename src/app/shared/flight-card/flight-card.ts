import { DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

/** Kartica enega leta. Hitrost je v km/h, višina v metrih, smer v stopinjah. */
@Component({
  imports: [DecimalPipe, RouterLink, MatCardModule, MatButtonModule, MatChipsModule, FaIconComponent],
  selector: 'app-flight-card',
  styleUrl: './flight-card.scss',
  templateUrl: './flight-card.html',
})
export class FlightCard {
  readonly icao24 = input.required<string>();
  readonly callsign = input.required<string>();
  readonly country = input.required<string>();
  readonly altitude = input.required<number>();
  readonly speed = input.required<number>();
  readonly heading = input.required<number>();
  readonly status = input('V zraku');
  readonly note = input('');

  protected readonly faPlane = faPlane;
}
