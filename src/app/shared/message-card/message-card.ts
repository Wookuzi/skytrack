import { Component, input } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

/**
 * Sporočilo ali zapisek: naslov, podatki o avtorju/datumu, neobvezno stanje
 * in besedilo kot vsebina. Brez @if: prazno stanje se skrije s CSS razredom.
 */
@Component({
  imports: [MatChipsModule, FaIconComponent],
  selector: 'app-message-card',
  styleUrl: './message-card.scss',
  templateUrl: './message-card.html',
  host: {
    '[class.unread]': 'unread()',
    '[class.no-status]': '!status()',
  },
})
export class MessageCard {
  readonly heading = input.required<string>();
  readonly meta = input.required<string>();
  readonly icon = input.required<IconDefinition>();
  readonly status = input('');
  readonly unread = input(false);
}
