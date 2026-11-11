import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faCircleInfo,
  faClock,
  faCode,
  faDatabase,
  faGaugeHigh,
  faPlane,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { PageTitle } from '../../shared/page-title/page-title';
import { StatTile } from '../../shared/stat-tile/stat-tile';

@Component({
  imports: [MatCardModule, FaIconComponent, PageTitle, StatTile],
  selector: 'app-about-page',
  styleUrl: './about-page.scss',
  templateUrl: './about-page.html',
})
export class AboutPage {
  protected readonly faCircleInfo = faCircleInfo;
  protected readonly faClock = faClock;
  protected readonly faGaugeHigh = faGaugeHigh;
  protected readonly faPlane = faPlane;
  protected readonly faDatabase = faDatabase;
  protected readonly faUsers = faUsers;
  protected readonly faCode = faCode;
}
