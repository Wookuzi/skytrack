import { Routes } from '@angular/router';

// Vsaka stran se naloži šele, ko jo uporabnik odpre (manjši začetni paket).
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/radar-page/radar-page').then((m) => m.RadarPage),
    title: 'Radar · SkyTrack',
  },
  {
    path: 'let/:icao24',
    loadComponent: () =>
      import('./pages/flight-detail-page/flight-detail-page').then((m) => m.FlightDetailPage),
    title: 'Podrobnosti leta · SkyTrack',
  },
  {
    path: 'sledena',
    loadComponent: () => import('./pages/tracked-page/tracked-page').then((m) => m.TrackedPage),
    title: 'Sledena letala · SkyTrack',
  },
  {
    path: 'letalisca',
    loadComponent: () => import('./pages/airports-page/airports-page').then((m) => m.AirportsPage),
    title: 'Letališča · SkyTrack',
  },
  {
    path: 'prijava',
    loadComponent: () => import('./pages/login-page/login-page').then((m) => m.LoginPage),
    title: 'Prijava · SkyTrack',
  },
  {
    path: 'registracija',
    loadComponent: () => import('./pages/register-page/register-page').then((m) => m.RegisterPage),
    title: 'Registracija · SkyTrack',
  },
  {
    path: 'admin',
    loadComponent: () => import('./pages/admin-page/admin-page').then((m) => m.AdminPage),
    title: 'Administracija · SkyTrack',
  },
  {
    path: 'o-aplikaciji',
    loadComponent: () => import('./pages/about-page/about-page').then((m) => m.AboutPage),
    title: 'O aplikaciji · SkyTrack',
  },
  {
    path: 'kontakt',
    loadComponent: () => import('./pages/contact-page/contact-page').then((m) => m.ContactPage),
    title: 'Kontakt · SkyTrack',
  },
  { path: '**', redirectTo: '' },
];
