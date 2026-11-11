import { Component } from '@angular/core';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { PageTitle } from '../../shared/page-title/page-title';

@Component({
  imports: [PageTitle],
  selector: 'app-about-page',
  styleUrl: './about-page.scss',
  templateUrl: './about-page.html',
})
export class AboutPage {
  protected readonly icon = faCircleInfo;
}
