import { Component } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { PageTitle } from '../../shared/page-title/page-title';

@Component({
  imports: [PageTitle],
  selector: 'app-contact-page',
  styleUrl: './contact-page.scss',
  templateUrl: './contact-page.html',
})
export class ContactPage {
  protected readonly icon = faEnvelope;
}
