# Sondelogist – strona serwisu samochodowego (SvelteKit)

Projekt strony WWW dla serwisu samochodowego **Sondelogist**, oparty na **SvelteKit**.

## Struktura

- `package.json` – konfiguracja projektu i skrypty `npm`.
- `svelte.config.js`, `vite.config.js` – konfiguracja SvelteKit i Vite.
- `src/app.html` – szablon HTML aplikacji.
- `src/app.css` – globalne style (ciemny, nowoczesny motyw, layout responsywny).
- `src/routes/+layout.svelte` – główny layout importujący style.
- `src/routes/+page.svelte` – główna strona z sekcjami: hero, usługi, o nas, video, kontakt.

## Uruchomienie (dev – `npm run dev`)

1. Otwórz terminal w folderze `Sondelogist`.
2. Zainstaluj zależności:

   ```bash
   npm install
   ```

3. Uruchom serwer deweloperski:

   ```bash
   npm run dev
   ```

4. Wejdź w przeglądarce na adres, który pokaże terminal (zwykle `http://localhost:5173`).

## Logo

Strona zakłada, że logo znajduje się w katalogu statycznym SvelteKit:

- skopiuj plik logo `sondelogist-logo.png` do folderu `static` w projekcie (jeśli folder nie istnieje – utwórz go),
- finalna ścieżka powinna wyglądać tak: `static/sondelogist-logo.png`.

W kodzie logo jest używane jako `/sondelogist-logo.png`.

