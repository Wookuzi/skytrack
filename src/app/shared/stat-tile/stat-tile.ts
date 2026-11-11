import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

/** Ploščica z eno številko, enoto in oznako. */
@Component({
  imports: [MatCardModule, FaIconComponent],
  selector: 'app-stat-tile',
  styleUrl: './stat-tile.scss',
  templateUrl: './stat-tile.html',
})
export class StatTile {
  readonly label = input.required<string>();
  readonly value = input.required<string>();
  readonly unit = input('');
  readonly icon = input.required<IconDefinition>();
}
