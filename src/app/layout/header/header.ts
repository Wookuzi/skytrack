import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { Navbar } from '../navbar/navbar';

@Component({
  imports: [RouterLink, MatToolbarModule, FaIconComponent, Navbar],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  protected readonly faPlane = faPlane;
}
