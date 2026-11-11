import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faPlane, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Navbar } from '../navbar/navbar';

/**
 * Zgornja vrstica: stanje zračnega prostora, iskanje in prijava.
 * Vsebuje Navbar, ki je na širokem zaslonu prikazan kot levi pas.
 */
@Component({
  imports: [RouterLink, MatToolbarModule, MatButtonModule, FaIconComponent, Navbar],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  protected readonly faPlane = faPlane;
  protected readonly faMagnifyingGlass = faMagnifyingGlass;
  protected readonly faRightToBracket = faRightToBracket;
}
