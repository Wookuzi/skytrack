import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faLocationCrosshairs, faMinus, faPlane, faPlus } from '@fortawesome/free-solid-svg-icons';

/**
 * Stiliziran temen zemljevid (lasten SVG) z ikonami letal.
 * size="small" je pomanjšana različica za stran s podrobnostmi leta.
 * Element z atributom mapOverlay se prikaže kot lebdeča kartica na zemljevidu.
 */
@Component({
  imports: [MatButtonModule, FaIconComponent],
  selector: 'app-map-view',
  styleUrl: './map-view.scss',
  templateUrl: './map-view.html',
  host: { '[class.small]': "size() === 'small'" },
})
export class MapView {
  readonly size = input<'large' | 'small'>('large');

  protected readonly faPlane = faPlane;
  protected readonly faPlus = faPlus;
  protected readonly faMinus = faMinus;
  protected readonly faLocationCrosshairs = faLocationCrosshairs;
}
