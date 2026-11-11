import { Component } from '@angular/core';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { PageTitle } from '../../shared/page-title/page-title';

@Component({
  imports: [PageTitle],
  selector: 'app-login-page',
  styleUrl: './login-page.scss',
  templateUrl: './login-page.html',
})
export class LoginPage {
  protected readonly icon = faRightToBracket;
}
