import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faLock, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { PageTitle } from '../../shared/page-title/page-title';

/** Obrazec za prijavo. V tej vaji je samo vizualen in ne pošilja ničesar. */
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
  selector: 'app-login-page',
  styleUrl: './login-page.scss',
  templateUrl: './login-page.html',
})
export class LoginPage {
  protected readonly faRightToBracket = faRightToBracket;
  protected readonly faEnvelope = faEnvelope;
  protected readonly faLock = faLock;
}
