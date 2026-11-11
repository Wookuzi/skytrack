import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faCircleInfo,
  faEnvelope,
  faMapLocationDot,
  faPlane,
  faPlaneDeparture,
  faRightToBracket,
  faStar,
  faUserShield,
} from '@fortawesome/free-solid-svg-icons';

/**
 * Glavna navigacija. Na širokem zaslonu je ozek pas ikon na levi (z opisi
 * v namigih), na ozkem zaslonu meni za gumbom s tremi črtami. Preklop je v CSS.
 */
@Component({
  imports: [RouterLink, RouterLinkActive, MatButtonModule, MatMenuModule, MatTooltipModule, FaIconComponent],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
  protected readonly faPlane = faPlane;
  protected readonly faMapLocationDot = faMapLocationDot;
  protected readonly faStar = faStar;
  protected readonly faPlaneDeparture = faPlaneDeparture;
  protected readonly faUserShield = faUserShield;
  protected readonly faCircleInfo = faCircleInfo;
  protected readonly faEnvelope = faEnvelope;
  protected readonly faRightToBracket = faRightToBracket;
  protected readonly faBars = faBars;
}
