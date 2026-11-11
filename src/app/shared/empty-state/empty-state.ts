import { Component, input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

/** Prikaz, ko ni podatkov: ikona, naslov, razlaga in neobvezen gumb kot vsebina. */
@Component({
  imports: [FaIconComponent],
  selector: 'app-empty-state',
  styleUrl: './empty-state.scss',
  templateUrl: './empty-state.html',
})
export class EmptyState {
  readonly heading = input.required<string>();
  readonly text = input('');
  readonly icon = input.required<IconDefinition>();
}
