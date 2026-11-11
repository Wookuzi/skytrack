import { Component } from '@angular/core';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';
import { PageTitle } from '../../shared/page-title/page-title';

@Component({
  imports: [PageTitle],
  selector: 'app-admin-page',
  styleUrl: './admin-page.scss',
  templateUrl: './admin-page.html',
})
export class AdminPage {
  protected readonly icon = faUserShield;
}
