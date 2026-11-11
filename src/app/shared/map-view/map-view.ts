import { Component, input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

/**
 * Stiliziran zemljevid (lasten SVG) z ikonami letal.
 * size="small" je pomanjšana različica za stran s podrobnostmi leta.
 */
@Component({
  imports: [FaIconComponent],
  selector: 'app-map-view',
  styleUrl: './map-view.scss',
  templateUrl: './map-view.html',
  host: { '[class.small]': "size() === 'small'" },
})
export class MapView {
  readonly size = input<'large' | 'small'>('large');

  protected readonly faPlane = faPlane;
}
