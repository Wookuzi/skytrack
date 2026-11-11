import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { PageTitle } from '../../shared/page-title/page-title';

@Component({
  imports: [PageTitle],
  selector: 'app-register-page',
  styleUrl: './register-page.scss',
  templateUrl: './register-page.html',
})
export class RegisterPage {
  protected readonly icon = faUser;
}
