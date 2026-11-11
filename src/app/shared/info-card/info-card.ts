import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

/** Kartica z ikono, naslovom in poljubno vsebino (besedilo, seznam, obrazec). */
@Component({
  imports: [MatCardModule, FaIconComponent],
  selector: 'app-info-card',
  styleUrl: './info-card.scss',
  templateUrl: './info-card.html',
})
export class InfoCard {
  readonly heading = input.required<string>();
  readonly subtitle = input('');
  readonly icon = input.required<IconDefinition>();
}
