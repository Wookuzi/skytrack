import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faBan,
  faEnvelope,
  faEnvelopeOpen,
  faPen,
  faPlus,
  faStar,
  faTrash,
  faUserShield,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { MessageCard } from '../../shared/message-card/message-card';
import { PageTitle } from '../../shared/page-title/page-title';
import { StatTile } from '../../shared/stat-tile/stat-tile';

/**
 * Administracija. Tabele so navadne <table> v mat-card, ker mat-table
 * potrebuje strukturne direktive (*matRowDef), ki jih ta vaja ne uporablja.
 */
@Component({
  imports: [MatTabsModule, MatCardModule, MatButtonModule, MatChipsModule, FaIconComponent, PageTitle, StatTile, MessageCard],
  selector: 'app-admin-page',
  styleUrl: './admin-page.scss',
  templateUrl: './admin-page.html',
})
export class AdminPage {
  protected readonly faUserShield = faUserShield;
  protected readonly faUsers = faUsers;
  protected readonly faStar = faStar;
  protected readonly faEnvelope = faEnvelope;
  protected readonly faEnvelopeOpen = faEnvelopeOpen;
  protected readonly faPen = faPen;
  protected readonly faBan = faBan;
  protected readonly faTrash = faTrash;
  protected readonly faPlus = faPlus;
}
