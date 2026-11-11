import { Routes } from '@angular/router';
import { AboutPage } from './pages/about-page/about-page';
import { AdminPage } from './pages/admin-page/admin-page';
import { AirportsPage } from './pages/airports-page/airports-page';
import { ContactPage } from './pages/contact-page/contact-page';
import { FlightDetailPage } from './pages/flight-detail-page/flight-detail-page';
import { LoginPage } from './pages/login-page/login-page';
import { RadarPage } from './pages/radar-page/radar-page';
import { RegisterPage } from './pages/register-page/register-page';
import { TrackedPage } from './pages/tracked-page/tracked-page';

export const routes: Routes = [
  { path: '', component: RadarPage, title: 'Radar · SkyTrack' },
  { path: 'let/:icao24', component: FlightDetailPage, title: 'Podrobnosti leta · SkyTrack' },
  { path: 'sledena', component: TrackedPage, title: 'Sledena letala · SkyTrack' },
  { path: 'letalisca', component: AirportsPage, title: 'Letališča · SkyTrack' },
  { path: 'prijava', component: LoginPage, title: 'Prijava · SkyTrack' },
  { path: 'registracija', component: RegisterPage, title: 'Registracija · SkyTrack' },
  { path: 'admin', component: AdminPage, title: 'Administracija · SkyTrack' },
  { path: 'o-aplikaciji', component: AboutPage, title: 'O aplikaciji · SkyTrack' },
  { path: 'kontakt', component: ContactPage, title: 'Kontakt · SkyTrack' },
  { path: '**', redirectTo: '' },
];
