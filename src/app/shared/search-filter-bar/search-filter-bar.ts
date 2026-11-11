import { Component, input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

/** Iskalno polje; čipe za filtre poda nadrejena stran kot vsebino. */
@Component({
  imports: [MatFormFieldModule, MatInputModule, FaIconComponent],
  selector: 'app-search-filter-bar',
  styleUrl: './search-filter-bar.scss',
  templateUrl: './search-filter-bar.html',
})
export class SearchFilterBar {
  readonly label = input('Išči');
  readonly placeholder = input('');

  protected readonly faMagnifyingGlass = faMagnifyingGlass;
}
