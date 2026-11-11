# SkyTrack

Spletni sledilnik letal: zemljevid z letali v živo, podrobnosti posameznega leta in osebni seznam sledenih letal.

Projektna naloga *Načrtovanje spletne aplikacije in izdelava komponentno zasnovanega čelnega dela*. Čelni del je izdelan v Angularju 22 s statično vsebino, z Angular Material in Font Awesome.

## Hiter začetek

Potrebuješ Node.js 24 LTS (ali drugo različico, ki jo podpira Angular CLI 22: `^22.22.3`, `^24.15.0` ali `>=26`).

```bash
npm install
```

```bash
npm start
```

Aplikacija se odpre na <http://localhost:4200>. Prevajanje za preverjanje napak: `npm run build`.

---

## 1. Opis aplikacije

| | |
|---|---|
| **Ime** | SkyTrack (delovno ime) |
| **Kaj je** | Spletni sledilnik letal: zemljevid z letali v živo, podrobnosti posameznega leta in osebni seznam sledenih letal. |
| **Problem** | Ljubitelji letalstva nimajo preprostega, brezplačnega mesta, kjer bi videli, kaj leti nad njimi, in si shranili letala, ki jih zanimajo. Obstoječe storitve večino uporabnih funkcij zaklenejo za naročnino. |
| **Ciljna skupina** | Letalski navdušenci in spotterji; radovedni uporabniki, ki jih zanima "kaj leti nad mano"; dijaki in študenti, ki jih zanima letalstvo. |
| **Jezik vmesnika** | Slovenščina. Imena v kodi (komponente, spremenljivke) so angleška. |

**Obseg te vaje:** samo čelni del v Angularju s statično vsebino. Prijava, vloge, baza, zaledni del in klici na API so načrtovani in dokumentirani, ne pa implementirani.

---

## 2. Uporabniške vloge in pravice

| Zmožnost | Gost | Uporabnik | Administrator |
|---|:-:|:-:|:-:|
| Ogled radarja in seznama letov | ✓ | ✓ | ✓ |
| Ogled podrobnosti leta in letališč | ✓ | ✓ | ✓ |
| Informacijske strani, kontaktni obrazec | ✓ | ✓ | ✓ |
| Registracija in prijava | ✓ | – | – |
| Sledenje letalom, zapiski k letalom | – | ✓ | ✓ |
| Urejanje lastnega profila, odjava | – | ✓ | ✓ |
| Upravljanje uporabnikov (vloge, blokada) | – | – | ✓ |
| Urejanje letališč | – | – | ✓ |
| Pregled prejetih sporočil | – | – | ✓ |

Avtentikacija bo v končni različici potekala prek zalednega dela (registracija, prijava, odjava z žetonom). V tej vaji so obrazci samo vizualni.

---

## 3. Funkcionalnosti

| # | Funkcionalnost | V tej vaji | V končni različici |
|---|---|---|---|
| 1 | **Živi radar** — zemljevid z letali in seznam letov ob njem | Statičen stiliziran zemljevid in kartice z vzorčnimi leti | Pravi zemljevid (Leaflet), podatki iz OpenSky, osveževanje na 10 s |
| 2 | **Filtriranje in iskanje** — klicni znak, država, višina, v zraku / na tleh | Vrstica s polji in čipi brez logike | Filtriranje seznama in zemljevida |
| 3 | **Podrobnosti leta** — višina, hitrost, smer, država, zadnji kontakt | Stran z enim vzorčnim letom | Podatki izbranega letala, izris poti |
| 4 | **Sledenje letalom** — shranjevanje letal in zapiski | Stran s statičnim seznamom sledenih | Shranjevanje v bazo za prijavljenega uporabnika |
| 5 | **Letališča** — seznam in osnovni podatki | Kartice z vzorčnimi letališči | Podatki iz baze, letala v bližini |
| 6 | **Administracija** — uporabniki, letališča, sporočila | Stran z zavihki in statično tabelo | Dejansko upravljanje, dostop samo za administratorja |
| 7 | **Avtentikacija** — registracija, prijava, odjava | Vizualna obrazca | Prava prijava prek zalednega dela |
| 8 | **Informacijske vsebine** — O aplikaciji, Kontakt | Statični strani, obrazec brez pošiljanja | Shranjevanje sporočil v bazo |

Posebne vsebinske funkcionalnosti, ki jih zahteva naloga (vsaj tri): št. 1, 2, 3, 4 in 5.

---

## 4. Podatkovni model

```
User ──1:N── TrackedAircraft ──N:1── Aircraft
User ──1:N── ContactMessage (neobvezno; gost pošlje brez računa)
Airport (samostojna šifrantna tabela)
```

| Entiteta | Polja | Opomba |
|---|---|---|
| **User** | id, ime, email (unikaten), gesloHash, vloga (`user` / `admin`), ustvarjen | Geslo se nikoli ne shrani v berljivi obliki. |
| **Aircraft** | icao24 (ključ), klicniZnak, drzava, tip, operater | `icao24` je enolična 24-bitna oznaka letala iz OpenSky. |
| **TrackedAircraft** | id, userId → User, icao24 → Aircraft, zapisek, opozorilo (da/ne), dodano | Vmesna tabela: uporabnik sledi več letalom, letalu sledi več uporabnikov. |
| **Airport** | id, icao, iata, ime, mesto, drzava, lat, lon | Ureja administrator. |
| **ContactMessage** | id, userId (lahko prazno), ime, email, zadeva, vsebina, stanje (`novo` / `prebrano`), poslano | |

Žive pozicije letal se **ne** shranjujejo v bazo. Zaledni del jih bere iz OpenSky in jih kratko predpomni, da ne porabi dnevne kvote.

---

## 5. Zasloni in navigacija

| Pot | Stran | Vsebina | Kdo |
|---|---|---|---|
| `/` | Radar | Zemljevid, filtri, statistika, seznam letov | vsi |
| `/let/:icao24` | Podrobnosti leta | Mali zemljevid, podatki o letu, zavihki, podobni leti | vsi |
| `/sledena` | Sledena letala | Seznam sledenih, zapiski | uporabnik |
| `/letalisca` | Letališča | Iskanje, kartice letališč | vsi |
| `/prijava` | Prijava | Obrazec | gost |
| `/registracija` | Registracija | Obrazec | gost |
| `/admin` | Administracija | Zavihki: uporabniki, letališča, sporočila | administrator |
| `/o-aplikaciji` | O aplikaciji | Opis, vir podatkov, statistika | vsi |
| `/kontakt` | Kontakt | Kontaktni podatki in obrazec | vsi |

Glava z navigacijo in noga sta na vseh straneh. Na ozkem zaslonu se navigacija skrči v meni (gumb s tremi črtami). Ker v tej vaji ni prijave, so v navigaciji vidne vse povezave.

### Osnutki glavnih zaslonov

Radar (računalnik):

```
┌──────────────────────────────────────────────────────────────┐
│ ✈ SkyTrack   Radar  Sledena  Letališča  O aplikaciji   [Prijava] │
├──────────────────────────────────────────────────────────────┤
│ Radar v živo                                                 │
│ [ Išči klicni znak… ] [Država ▾] (V zraku) (Na tleh) (>10 km)│
├───────────────────────────────────────┬──────────────────────┤
│                                       │ [ 24 letal ][ 3 sled.]│
│            ZEMLJEVID                  │ ┌──────────────────┐ │
│         ✈        ✈                    │ │ RYR5PC  Poljska  │ │
│     ✈         ✈        ✈              │ │ 11 580 m 804 km/h│ │
│                                       │ └──────────────────┘ │
│                                       │ ┌──────────────────┐ │
│                                       │ │ THY72B  Turčija  │ │
│                                       │ └──────────────────┘ │
├───────────────────────────────────────┴──────────────────────┤
│ © SkyTrack · Podatki: OpenSky Network · Kontakt              │
└──────────────────────────────────────────────────────────────┘
```

Podrobnosti leta:

```
┌──────────────────────────────────────────────────────────────┐
│ ← Radar      RYR5PC · Ryanair                    [★ Sledi]   │
├──────────────────────────────┬───────────────────────────────┤
│        MALI ZEMLJEVID        │ [Višina ] [Hitrost] [Smer] [↕]│
│              ✈               │ 11 580 m  804 km/h  208°  0 m/s│
├──────────────────────────────┴───────────────────────────────┤
│ [ Podatki ] [ Pot ] [ Zgodovina ]                            │
│ ICAO24 48c2b0 · Država Poljska · Squawk 1000 · Zadnji kontakt│
├──────────────────────────────────────────────────────────────┤
│ Podobni leti:  [kartica leta] [kartica leta] [kartica leta]  │
└──────────────────────────────────────────────────────────────┘
```

Sledena letala:

```
┌──────────────────────────────────────────────────────────────┐
│ Sledena letala                                               │
│ [ Sledena (3) ] [ Zapiski ]                                  │
│ ┌────────────────┐ ┌────────────────┐ ┌────────────────┐     │
│ │ QTR34E  Katar  │ │ CTN436R Hrvaška│ │ TVF44AG Francija│    │
│ │ 10 058 m       │ │ 2 446 m        │ │ 11 270 m       │     │
│ │ "A350, lep!"   │ │                │ │                │     │
│ └────────────────┘ └────────────────┘ └────────────────┘     │
└──────────────────────────────────────────────────────────────┘
```

Prijava (telefon):

```
┌───────────────────┐
│ ✈ SkyTrack     ☰ │
├───────────────────┤
│      Prijava      │
│ ┌───────────────┐ │
│ │ E-pošta       │ │
│ └───────────────┘ │
│ ┌───────────────┐ │
│ │ Geslo         │ │
│ └───────────────┘ │
│ [    Prijava    ] │
│ Nimaš računa?     │
│ Registracija      │
├───────────────────┤
│ © SkyTrack        │
└───────────────────┘
```

Za oddajo je treba te osnutke pretvoriti v slike ali PDF (glej razdelek 11).

---

## 6. Angular komponente

Skupaj **18 lastnih komponent** (zahtevanih 8), od tega **6 uporabljenih na več mestih** (zahtevani 2).

### Hierarhija

```
App
├─ Header
│   └─ Navbar
├─ <router-outlet>
│   ├─ RadarPage ........ PageTitle, SearchFilterBar, MapView, StatTile ×3, FlightCard ×6
│   ├─ FlightDetailPage . PageTitle, MapView, StatTile ×4, FlightCard ×3
│   ├─ TrackedPage ...... PageTitle, FlightCard ×3
│   ├─ AirportsPage ..... PageTitle, SearchFilterBar, AirportCard ×4
│   ├─ LoginPage ........ PageTitle
│   ├─ RegisterPage ..... PageTitle
│   ├─ AdminPage ........ PageTitle, StatTile ×3
│   ├─ AboutPage ........ PageTitle, StatTile ×3
│   └─ ContactPage ...... PageTitle
└─ Footer
```

### Seznam

| Komponenta | Selektor | Mapa | Namen | Uporabljena v |
|---|---|---|---|---|
| Header | `app-header` | `layout/` | Orodna vrstica z logotipom in navigacijo | App |
| Navbar | `app-navbar` | `layout/` | Povezave med stranmi, meni na telefonu, gumb Prijava | Header |
| Footer | `app-footer` | `layout/` | Avtorstvo, vir podatkov, povezave | App |
| **PageTitle** | `app-page-title` | `shared/` | Naslov in podnaslov strani z ikono | vseh 9 strani |
| **FlightCard** | `app-flight-card` | `shared/` | Kartica leta: klicni znak, država, višina, hitrost | Radar, Podrobnosti, Sledena |
| **StatTile** | `app-stat-tile` | `shared/` | Ploščica z eno številko in oznako | Radar, Podrobnosti, Admin, O aplikaciji |
| **SearchFilterBar** | `app-search-filter-bar` | `shared/` | Iskalno polje in čipi za filtre | Radar, Letališča |
| **MapView** | `app-map-view` | `shared/` | Stiliziran zemljevid z ikonami letal | Radar (velik), Podrobnosti (majhen) |
| **AirportCard** | `app-airport-card` | `shared/` | Kartica letališča: koda, ime, mesto | Letališča (×4) |
| RadarPage | `app-radar-page` | `pages/` | Domača stran | usmerjevalnik |
| FlightDetailPage | `app-flight-detail-page` | `pages/` | Podrobnosti enega leta | usmerjevalnik |
| TrackedPage | `app-tracked-page` | `pages/` | Sledena letala in zapiski | usmerjevalnik |
| AirportsPage | `app-airports-page` | `pages/` | Seznam letališč | usmerjevalnik |
| LoginPage | `app-login-page` | `pages/` | Obrazec za prijavo | usmerjevalnik |
| RegisterPage | `app-register-page` | `pages/` | Obrazec za registracijo | usmerjevalnik |
| AdminPage | `app-admin-page` | `pages/` | Administracija z zavihki | usmerjevalnik |
| AboutPage | `app-about-page` | `pages/` | O aplikaciji | usmerjevalnik |
| ContactPage | `app-contact-page` | `pages/` | Kontaktni podatki in obrazec | usmerjevalnik |

Postavitvene in skupne komponente se vključujejo s selektorji v nadrejene predloge. Strani se menjajo z Angular usmerjevalnikom.

Različna vsebina v ponovno uporabljenih komponentah (npr. drug klicni znak v vsaki kartici) se poda z vhodnimi podatki (`input()`); glej odprto vprašanje v razdelku 13.

---

## 7. Angular Material in Font Awesome

**Angular Material** — 7 vrst komponent (zahtevane 4):

| Komponenta | Kje |
|---|---|
| Toolbar (`mat-toolbar`) | Header |
| Button (`mat-button`, `mat-flat-button`, `mat-icon-button`) | Navbar, obrazci, kartice |
| Card (`mat-card`) | FlightCard, AirportCard, StatTile, obrazci |
| Form field + Input (`mat-form-field`, `matInput`) | Prijava, Registracija, Kontakt, SearchFilterBar |
| Tabs (`mat-tab-group`) | Podrobnosti leta, Sledena, Admin |
| Menu (`mat-menu`) | Navbar na ozkem zaslonu (gumb s tremi črtami) |
| Chips (`mat-chip-set`) | SearchFilterBar (filtri), FlightCard (stanje) |

**Font Awesome** — vsaj 12 ikon (zahtevanih 5), uvoženih v TypeScript in prikazanih s `<fa-icon>`:

| Ikona | Kje |
|---|---|
| `faPlane` | logotip, ikone letal na zemljevidu, FlightCard |
| `faMapLocationDot` | Navbar (Radar) |
| `faStar` | Navbar (Sledena), gumb Sledi |
| `faPlaneDeparture` | Navbar (Letališča), AirportCard |
| `faMagnifyingGlass` | SearchFilterBar |
| `faUser` | Navbar, obrazci |
| `faRightToBracket` | gumb Prijava |
| `faGaugeHigh` | StatTile (hitrost) |
| `faCompass` | StatTile (smer) |
| `faEnvelope` | Kontakt, noga |
| `faBars` | meni na telefonu |
| `faUserShield` | Admin |

Poleg teh je uporabljenih še 16 ikon: `faArrowLeft`, `faArrowsUpDown`, `faBan`, `faCircleInfo`, `faClock`, `faCode`, `faDatabase`, `faEnvelopeOpen`, `faLock`, `faMountain`, `faPaperPlane`, `faPen`, `faPlus`, `faTrash`, `faUserPlus`, `faUsers` (skupaj 28).

Brez oznak `<i class="fa …">` in brez CDN povezav.

---

## 8. Videz in odzivnost

- **Slog:** temna "radarska" tema. Temno modro ozadje, svetlo besedilo, en poudarek (jantarna) za dejanja in izbrano stanje.
- **Tema:** Angular Material 3, barve določene enkrat v `styles.scss` kot CSS spremenljivke; komponente ne vsebujejo svojih barvnih vrednosti.
- **Tipografija:** Roboto (privzeta za Material); številke v ploščicah z enako širokimi števkami.
- **Razmiki:** enotna lestvica 4 / 8 / 16 / 24 / 32 px.
- **Prelomne točke:**
  - do 600 px: en stolpec, zemljevid nad seznamom;
  - 600–960 px: dva stolpca kartic, zemljevid nad seznamom;
  - pod 960 px: navigacija v meniju (gumb s tremi črtami), ker povezave ne gredo več v eno vrstico;
  - nad 960 px: zemljevid in stranski seznam drug ob drugem, tri do štiri kartice v vrsti.
- **Zemljevid:** lasten stiliziran SVG (mreža, krogi dosega, obris), na njem ikone letal, postavljene in zasukane s CSS. Brez zunanjih slik, zato ni vprašanj glede licenc.

---

## 9. Vir podatkov: OpenSky Network

Izbran s seznama [public-apis → Transportation](https://github.com/public-apis/public-apis#transportation). Dokumentacija: <https://openskynetwork.github.io/opensky-api/rest.html>.

**Preverjeno 11. 11. 2026 z živim klicem** (brez računa in brez ključa):

```
GET https://opensky-network.org/api/states/all?lamin=45.3&lomin=13.3&lamax=46.9&lomax=16.7
→ HTTP 200, seznam letal nad Slovenijo in okolico, x-rate-limit-remaining: 399
```

| Lastnost | Vrednost |
|---|---|
| Cena | Brezplačno |
| Kvota | 400 kreditov/dan anonimno; 4000/dan z brezplačnim računom |
| Cena klica | 1–4 krediti za `/states/all`, odvisno od velikosti območja |
| Ločljivost | 10 sekund za anonimne uporabnike, samo trenutno stanje |
| Prijava | Neobvezna. Z računom: OAuth2 (client credentials), žeton velja 30 minut |
| Podatki | icao24, klicni znak, država, zemljepisna dolžina in širina, višina, hitrost, smer, hitrost vzpenjanja, na tleh, squawk |
| Česa ni | Vozni redi, zamude, odhodno/prihodno letališče v živo |

**Omejitvi, ki vplivata na arhitekturo:**

1. **CORS.** Strežnik vrne `access-control-allow-origin: https://opensky-network.org`, zato brskalnik klica iz Angular aplikacije zavrne. Klice mora posredovati Node.js zaledni del (v razvoju lahko tudi Angular proxy).
2. **Kvota.** 400 kreditov na dan ne zadošča za osveževanje na 10 s pri vsakem obiskovalcu. Zaledni del zato kliče OpenSky enkrat in odgovor predpomni za vse.

**Pogoji uporabe:** uradne strani s pogoji ni bilo mogoče odpreti (HTTP 403). Po drugih virih je brezplačna uporaba namenjena nekomercialni, raziskovalni in izobraževalni rabi z navedbo vira; pred objavo aplikacije to preveri pri viru. V nogi aplikacije je naveden vir "Podatki: OpenSky Network".

Zavrnjene možnosti: **aviationstack** (brezplačno samo 100 klicev na mesec), **ADS-B Exchange** (samo plačljive naročnine). **AirportMiles** (statični podatki o letališčih, brezplačno, brez ključa) je uporaben kot dopolnilo za šifrant letališč.

---

## 10. Potrebe za razvoj

### Orodja

| Orodje | Potrebno | Uporabljeno pri razvoju |
|---|---|---|
| Node.js | `^22.22.3`, `^24.15.0` ali `>=26` (zahteva Angular CLI 22) | 24.22.2 LTS |
| npm | priložen Node.js | 11.19.1 |
| Angular CLI | 22.x | 22.2.6 |
| Git | katerakoli novejša | 2.50.1 |
| Brskalnik | Chrome ali Edge z razvijalskimi orodji | za preverjanje na telefonski širini |
| Urejevalnik | VS Code + razširitev Angular Language Service | priporočeno |

Namestitev Node 24 LTS na macOS s Homebrew (če je nameščena druga različica, jo `brew unlink` izklopi):

```bash
brew install node@24
```

```bash
brew unlink node && brew link --overwrite --force node@24
```

Namestitev Angular CLI:

```bash
npm install -g @angular/cli@22
```

### Paketi projekta

| Paket | Različica (preverjeno 11. 11. 2026) | Namen |
|---|---|---|
| `@angular/core` in ostali | 22.x | ogrodje |
| `@angular/material`, `@angular/cdk` | 22.2.6 | komponente vmesnika |
| `@fortawesome/angular-fontawesome` | 5.1.0 (zahteva Angular 22) | komponenta `<fa-icon>` |
| `@fortawesome/fontawesome-svg-core` | 7.3.1 | jedro ikon |
| `@fortawesome/free-solid-svg-icons` | 7.3.1 | brezplačne ikone |

### Namestitev in zagon projekta

```bash
npm install
```

```bash
npm start
```

Aplikacija je nato na <http://localhost:4200>. Prevajanje za preverjanje napak: `ng build`.

### Računi in storitve

| Kaj | Zakaj | Kdaj |
|---|---|---|
| GitHub račun in repozitorij, dostopen učitelju | oddaja izvorne kode | pred prvo objavo kode |
| GitHub Projects tabla | načrt dela in spremljanje nalog | takoj |
| OpenSky račun (neobvezno) | 4000 namesto 400 kreditov na dan | šele z zalednim delom |

### Za poznejši razvoj (ni del te vaje)

Node.js z Express za zaledni del, podatkovna baza (glej razdelek 13), Leaflet 1.9.4 za pravi zemljevid, knjižnica za zgoščevanje gesel in žetone JWT.

---

## 11. Izvedba po fazah

Faze sledijo šestim tednom iz navodil naloge. Izvedba je lahko hitrejša, vrstni red pa ostane.

| Faza | Naloga | Opis | Stanje |
|---|---|---|---|
| 1 | Načrt aplikacije | Ta dokument: opis, vloge, funkcionalnosti, podatkovni model | zaključeno |
| 1 | Izbira API-ja | Izbira in preverjanje OpenSky Network | zaključeno |
| 1 | Osnutki zaslonov | Osnutke iz razdelka 5 pretvoriti v slike ali PDF | načrtovano |
| 1 | Tabla nalog | Ustvariti GitHub Projects tablo in vnesti naloge iz te tabele | načrtovano |
| 1 | Okolje | Namestiti Node 24 in Angular CLI | zaključeno |
| 1 | Angular projekt | `ng new`, prvi commit, osnovni `README.md` | zaključeno |
| 2 | Postavitev | Header, Navbar, Footer, usmerjanje, prazne strani | zaključeno |
| 2 | Skupne komponente | PageTitle, FlightCard, StatTile, SearchFilterBar, MapView, AirportCard | zaključeno |
| 2 | Osnovni prikazi | Radar, Podrobnosti leta, Sledena, Letališča s statično vsebino | zaključeno |
| 3 | Obrazci | Prijava, Registracija, Kontakt | zaključeno |
| 3 | Preostale strani | Admin, O aplikaciji | zaključeno |
| 3 | Slog | Barvna shema, tipografija, razmiki | zaključeno |
| 3 | Odzivnost | Prelomne točke, navigacija na telefonu | zaključeno |
| 4 | Pregled podvajanja | Odstraniti podvojen HTML in CSS, po potrebi nove skupne komponente | načrtovano |
| 4 | Dodelava | Vizualna hierarhija, prazna stanja, dostopnost (kontrast, oznake polj) | načrtovano |
| 5 | Angular Material | Namestitev, tema, 7 vrst komponent | načrtovano |
| 5 | Font Awesome | Namestitev, uvoz ikon v TypeScript, `<fa-icon>` | načrtovano |
| 6 | Preverjanje | Prevajanje brez napak, pregled vseh strani na računalniku in telefonu | načrtovano |
| 6 | Dokumentacija | Dokončan `README.md` z vsemi zahtevanimi razdelki | načrtovano |
| 6 | Oddaja | Posnetki zaslona, posodobljena tabla, objava repozitorija, predstavitev | načrtovano |

Naloga zahteva v `README.md` tedenski dnevnik (načrtovano, izdelano, težave, kaj sledi). Dnevnik se piše po fazah z dejanskim potekom dela; datume vpišeš sam.

### Preverjanje minimalnih zahtev

| Zahteva | Minimum | Načrt |
|---|---|---|
| Lastne komponente | 8 | 18 |
| Komponente na več mestih | 2 | 6 |
| Različni vsebinski prikazi | 4 | 9 strani |
| Vrste Material komponent | 4 | 7 |
| Font Awesome ikone | 5 | 28 |
| Uporabniške vloge | 2 | 3 |
| Vsebinske funkcionalnosti | 3 | 5 |
| Odzivnost | osnovna | 3 prelomne točke |

---

## 12. Nadaljnji razvoj (ni implementirano v tej vaji)

1. Node.js zaledni del z REST API-jem.
2. Podatkovna baza po modelu iz razdelka 4.
3. Registracija, prijava in odjava; zaščita poti glede na vlogo.
4. Posrednik do OpenSky s predpomnilnikom; osveževanje radarja.
5. Pravi zemljevid (Leaflet) namesto stiliziranega SVG.
6. Delujoče filtriranje in iskanje.
7. Shranjevanje sledenih letal in zapiskov.
8. Opozorilo, ko sledeno letalo vzleti ali pristane.
9. Administracija z dejanskim urejanjem podatkov.
10. Dinamični seznami (`@for`, `@if`) namesto statično ponovljenih komponent.

---

## 13. Odprta vprašanja

| Vprašanje | Privzeta odločitev, če ni odgovora |
|---|---|
| Ali smejo komponente uporabljati vhodne podatke (`input()`)? Navodila dopuščajo tudi ponovitev z enako statično vsebino. | Da, preprost `input()` za besedilo v PageTitle, FlightCard, StatTile, AirportCard. |
| Ali je usmerjevalnik (več strani) v redu za učitelja? | Da. |
| Ali ostane ime SkyTrack? | Da. |
| Katera baza za končno različico? | Tista, ki jo obravnavate pri predmetu; model iz razdelka 4 ustreza obema vrstama. |
| Kje bo projekt na disku in kako se imenuje repozitorij? | Vprašati pred `ng new`. |


---

## 14. Dnevnik dela

Dnevnik se piše po fazah. Datume vpiši sam.

### Faza 1 — Načrt in postavitev projekta (datum: ____)

- **Načrtovano:** načrt aplikacije, izbira API-ja, osnutki zaslonov, tabla nalog, razvojno okolje, Angular projekt.
- **Izdelano:** načrt (razdelki 1–13), izbran in preverjen OpenSky Network, nameščena Node.js 24 LTS in Angular CLI 22.2.6, ustvarjen Angular projekt (SCSS, usmerjevalnik, brez SSR, brez zone.js), nameščena Angular Material 22.2.6 in Font Awesome (angular-fontawesome 5.1.0, ikone 7.3.1), pripravljene mape `layout/`, `shared/`, `pages/`.
- **Težave:** na računalniku je bil Node.js 25, ki ga Angular CLI 22 ne podpira; zamenjan z Node.js 24 LTS. Uradnih pogojev uporabe OpenSky ni bilo mogoče odpreti (HTTP 403).
- **Kaj sledi:** osnutki zaslonov kot slike ali PDF, GitHub Projects tabla, nato faza 2 (postavitev in skupne komponente).

### Faza 2 — Postavitev, skupne komponente in osnovni prikazi (datum: ____)

- **Načrtovano:** Header, Navbar, Footer, usmerjanje med 9 stranmi, šest skupnih komponent, vsebina strani Radar, Podrobnosti leta, Sledena letala in Letališča.
- **Izdelano:** vseh 18 komponent; postavitev z `mat-toolbar` in povezavami usmerjevalnika; skupne komponente PageTitle, FlightCard, StatTile, SearchFilterBar, MapView (lasten SVG zemljevid) in AirportCard z vhodnimi podatki (`input()`); štiri strani z vzorčnimi podatki iz OpenSky; preostalih pet strani ima naslov in čaka na fazo 3. Material (toolbar, button, card, chips, form field, tabs) in Font Awesome sta vgrajena sproti.
- **Težave:** začetni paket je presegel omejitev 500 kB; rešeno z nalaganjem strani po potrebi (`loadComponent`). Brez `@if` se prazni deli (npr. kartica brez zapiska) skrijejo s CSS `:empty`.
- **Kaj sledi:** obrazci (Prijava, Registracija, Kontakt), strani Admin in O aplikaciji, temna tema, navigacija na telefonu.

### Faza 3 — Obrazci, preostale strani, slog in odzivnost (datum: ____)

- **Načrtovano:** obrazci za prijavo, registracijo in kontakt; strani Admin in O aplikaciji; barvna shema, tipografija in razmiki; prelomne točke in navigacija na telefonu.
- **Izdelano:** temna "radarska" tema (Material 3, temno modre površine, jantarni poudarek, cian za radarske kroge), vse barve na enem mestu v `styles.scss`; skupni razredi za obrazce, tabele in mreže kartic; trije vizualni obrazci; Admin z zavihki (uporabniki, letališča, sporočila) in navadnimi tabelami; O aplikaciji s ploščicami in karticami; meni z `mat-menu` pod 960 px, preklop samo s CSS; prelomni točki 600 in 960 px.
- **Težave:** Material meni je povečal začetni paket na 544 kB, kar je nad privzeto mejo opozorila 500 kB; meja je dvignjena na 750 kB (napaka ostane pri 1 MB). Navigacija s petimi povezavami ne gre v eno vrstico že pod 960 px, zato je meni uporabljen do te širine in ne samo do 600 px.
- **Kaj sledi:** pregled podvajanja HTML in CSS, dodelava vizualne hierarhije in dostopnosti.
