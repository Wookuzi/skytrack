import { registerLocaleData } from '@angular/common';
import localeSl from '@angular/common/locales/sl';
import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';

// Slovenska oblika števil in datumov (npr. 11.582 m).
registerLocaleData(localeSl);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'top' })),
    { provide: LOCALE_ID, useValue: 'sl' },
  ],
};
