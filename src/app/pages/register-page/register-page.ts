import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faLock, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { PageTitle } from '../../shared/page-title/page-title';

/** Obrazec za registracijo. V tej vaji je samo vizualen in ne pošilja ničesar. */
@Component({
  imports: [
    RouterLink,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FaIconComponent,
    PageTitle,
  ],
  selector: 'app-register-page',
  styleUrl: './register-page.scss',
  templateUrl: './register-page.html',
})
export class RegisterPage {
  protected readonly faUserPlus = faUserPlus;
  protected readonly faUser = faUser;
  protected readonly faEnvelope = faEnvelope;
  protected readonly faLock = faLock;
}
