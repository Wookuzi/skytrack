import { Component, computed, input } from '@angular/core';

/** Polkrožni merilnik (npr. hitrost, višina). Vrednost se pretvori v delež od max. */
@Component({
  selector: 'app-gauge',
  styleUrl: './gauge.scss',
  templateUrl: './gauge.html',
})
export class Gauge {
  readonly label = input.required<string>();
  readonly value = input.required<number>();
  readonly max = input.required<number>();
  /** Besedilo vrednosti, kot naj se izpiše (npr. "11.582"). */
  readonly display = input.required<string>();
  readonly unit = input('');

  protected readonly percent = computed(() => Math.max(0, Math.min(100, (this.value() / this.max()) * 100)));
}
