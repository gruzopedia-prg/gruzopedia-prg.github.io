# Gruzopedia PRG

Minimalistyczna encyklopedia aut bożych w stylu starych serwisów wiki. Działa za darmo na **GitHub Pages + Jekyll**. Bez backendu, bazy danych, npm, kont użytkowników i osobnego pliku JSON.

## Pierwsza publikacja

1. Utwórz **publiczne** repozytorium `gruzopedia-prg.github.io` w organizacji `gruzopedia-prg`.
2. Wgraj **zawartość** tej paczki do głównego katalogu repozytorium (`_config.yml`, `index.html`, foldery `_layouts`, `_auta`, `assets` itd.). Nie wgrywaj nadrzędnego folderu `gruzopedia_site`.
3. W repozytorium wejdź w **Settings → Pages → Build and deployment**.
4. Ustaw **Source: Deploy from a branch**, **Branch: main**, **Folder: /(root)**, a następnie **Save**.
5. Gdy publikacja się zakończy, strona będzie dostępna pod `https://gruzopedia-prg.github.io/` (jeśli organizacja i repozytorium mają te nazwy).

**Uwaga:** GitHub Pages korzysta z Jekylla i generuje pliki HTML z plików Markdown. Lokalnie samo dwukrotne kliknięcie `index.html` nie pokaże pełnej strony — trzeba ją opublikować albo uruchomić Jekylla.

## Dodawanie nowego samochodu (bez programowania)

### 1. Dodaj zdjęcia

W GitHubie wejdź do `assets/img` → **Add file → Upload files** i dodaj pliki o prostych nazwach, np. `astra-kuby-01.jpg`, `astra-kuby-02.jpg`. Kliknij **Commit changes**.

Możesz przesłać JPG, PNG lub WebP. Polecane rozmiary: szerokość 1200–1600 px, każde zdjęcie najlepiej poniżej 1 MB. Nie publikuj tablic rejestracyjnych ani danych osób bez ich zgody.

### 2. Utwórz artykuł

Wejdź do folderu `_auta`, wybierz **Add file → Create new file** i nazwij go np. `opel-astra-kuby.md`.

Wklej wzór poniżej i podmień dane na prawdziwe:

```md
---
title: Opel Astra Kuby
wlasciciel: Kuba
rok: 1998
status: W służbie
ocena: "8,5"
zdjecie: /assets/img/astra-kuby-01.jpg
podpis_zdjecia: Astra na parkingu, lato 2026.
opis: zasłużony pojazd użytkowany przez Kubę od 2024 roku.
dane:
  marka: Opel
  model: Astra F
  silnik: 1.6 benzyna
  moc: 75 KM
  przebieg: 320 000 km
  skrzynia: Manualna
  kolor: Zielony
galeria:
  - plik: /assets/img/astra-kuby-02.jpg
    opis: Wnętrze pojazdu.
---
## Historia

Tutaj piszesz **normalny tekst** o samochodzie.

## Stan techniczny

Opis stanu samochodu.

### Usterki

- Usterka nr 1.
- Usterka nr 2.

## Ciekawostki

Dowolne opowieści i dodatkowe sekcje.
```

Kliknij **Commit changes**. GitHub Pages sam stworzy nową podstronę `https://gruzopedia-prg.github.io/auta/opel-astra-kuby/` i automatycznie doda ją do tabeli na stronie głównej.

### 3. Późniejsze poprawki

Otwórz `_auta/opel-astra-kuby.md`, kliknij ikonę ołówka (Edit this file), zmień treść i zrób commit. Możesz również skorzystać z linku **Edytuj źródło** na stronie samochodu.

## Format treści

- `## Historia` — większa sekcja artykułu (automatycznie trafi do spisu treści).
- `### Znane usterki` — podsekcja (też trafi do spisu treści).
- `**ważne**` — pogrubienie.
- `- element` — punkt listy.
- `[tekst](https://example.com)` — link.
- `![Opis]({{ '/assets/img/astra-kuby-03.jpg' | relative_url }})` — fotografia w treści artykułu.
- `| Kolumna A | Kolumna B |` — tabela Markdown (wstaw też drugi wiersz z `| --- | --- |`).
- `dane:` — dodatkowe pola w tabeli specyfikacji; możesz dodawać nowe bez edycji HTML.
- `galeria:` — zdjęcia na dole artykułu, każda pozycja z polami `plik` i `opis`.

Dane wpisuje się w **YAML na górze pliku `.md`** (fragment pomiędzy dwoma `---`). Tekst artykułu jest pod nim, w Markdown. Nie trzeba robić `cars.json` ani ręcznie edytować szablonów.

**Ważne:** początkowe i końcowe `---` w YAML są konieczne. Uważaj na dwukropki w wartości — w razie wątpliwości umieść wartość w cudzysłowie, np. `opis: "Stan: przerażający"`.

## Usuń demonstracyjny samochód

Po dodaniu pierwszego prawdziwego samochodu usuń plik `_auta/fiat-seicento-demo.md`. Jest fikcyjny i służy wyłącznie za wzór.

## Gdzie co zmieniać?

| Plik / folder | Przeznaczenie |
| --- | --- |
| `_auta/*.md` | Po jednym artykule na każde auto |
| `assets/img/` | Zdjęcia samochodów |
| `_layouts/auto.html` | Wspólny wygląd podstron aut |
| `_layouts/default.html` | Nagłówek, menu, stopka |
| `assets/css/wiki.css` | Kolory, odstępy, typografia |
| `assets/js/wiki.js` | Wyszukiwarka katalogu, spis treści |
| `index.html` | Strona główna i automatyczny katalog |
| `_config.yml` | Ustawienia Jekylla i adres repozytorium |

## Dodatkowe informacje

- To jest **statyczna** wiki: goście mogą czytać, lecz nie mogą edytować z poziomu strony. Redakcja artykułów odbywa się na GitHubie. Znajomym można nadać dostęp do repozytorium.
- Nie trzeba żadnego serwera, płatnego hostingu ani zewnętrznego serwisu do zdjęć.
- W przypadku zmiany organizacji lub nazwy repozytorium popraw pola `url`, `baseurl` i `repository` w `_config.yml`.
- Kod źródłowy nie używa zewnętrznych CDN ani fontów, więc strona działa niezależnie od usług trzecich.
