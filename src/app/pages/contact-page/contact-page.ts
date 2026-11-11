import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faClock, faDatabase, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { PageTitle } from '../../shared/page-title/page-title';

/** Kontaktni podatki in obrazec. Obrazec v tej vaji ne pošilja ničesar. */
@Component({
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, FaIconComponent, PageTitle],
  selector: 'app-contact-page',
  styleUrl: './contact-page.scss',
  templateUrl: './contact-page.html',
})
export class ContactPage {
  protected readonly faEnvelope = faEnvelope;
  protected readonly faClock = faClock;
  protected readonly faDatabase = faDatabase;
  protected readonly faPaperPlane = faPaperPlane;
}
