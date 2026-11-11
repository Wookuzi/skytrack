import { Component, input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

/** Naslov strani z ikono in podnaslovom. Dodatni gumbi se podajo kot vsebina. */
@Component({
  imports: [FaIconComponent],
  selector: 'app-page-title',
  styleUrl: './page-title.scss',
  templateUrl: './page-title.html',
})
export class PageTitle {
  readonly heading = input.required<string>();
  readonly subtitle = input('');
  readonly icon = input.required<IconDefinition>();
}
