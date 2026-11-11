import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faMapLocationDot,
  faPlaneDeparture,
  faRightToBracket,
  faStar,
  faCircleInfo,
  faUserShield,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  imports: [RouterLink, RouterLinkActive, MatButtonModule, FaIconComponent],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
  protected readonly faMapLocationDot = faMapLocationDot;
  protected readonly faStar = faStar;
  protected readonly faPlaneDeparture = faPlaneDeparture;
  protected readonly faUserShield = faUserShield;
  protected readonly faCircleInfo = faCircleInfo;
  protected readonly faRightToBracket = faRightToBracket;
}
