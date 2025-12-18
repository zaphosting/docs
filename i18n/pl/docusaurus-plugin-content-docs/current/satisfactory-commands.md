---
id: satisfactory-commands
title: "Satisfactory: Komendy Konsoli"
description: "Odkryj, jak zoptymalizować swoją rozgrywkę w Satisfactory dzięki niezbędnym komendom konsoli i wskazówkom dotyczącym skrótów klawiszowych → Dowiedz się więcej już teraz"
sidebar_label: Komendy Konsoli
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Satisfactory oferuje szeroki wachlarz przydatnych komend, które pozwalają graczom dostosować ustawienia klienta. Na tej stronie podsumowujemy popularne i użyteczne komendy, które są często wykorzystywane przez graczy Satisfactory.

<InlineVoucher />

## Dostęp do konsoli
Korzystanie z konsoli w Satisfactory jest bardzo proste — wystarczy nacisnąć klawisz `` ` `` (backtick znajduje się nad klawiszem TAB), aby przełączać widoczność konsoli. Konsola może być zamknięta, otwarta jako małe okno poleceń na dole lub w pełni rozwinięta za każdym razem, gdy ją włączysz.

:::info
Jeśli klawisz backtick nie działa, wykonaj kroki w podsekcji poniżej, aby ustawić i aktywować nowy skrót klawiszowy.
:::

### Nie mogę uzyskać dostępu do konsoli
Czasem ze względu na układ regionalnej klawiatury domyślny klawisz aktywujący konsolę (backtick) może nie działać, dlatego trzeba ustawić nowy. Przed tym zamknij Satisfactory, jeśli jest uruchomione.

Naciśnij `Windows + R` lub wyszukaj w menu start „Uruchom”. Następnie wklej poniższą ścieżkę:

:::info
%LOCALAPPDATA%\FactoryGame\Saved\Config\WindowsNoEditor
:::

Otwórz plik `Input.ini` w edytorze tekstu (np. Notatnik).

![Screenshot 2023-02-22 011634](https://screensaver01.zap-hosting.com/index.php/s/re9wfZLbCosj5K5/preview)

Na końcu pliku wklej dokładnie tę linię:

`[/script/engine.inputsettings] ConsoleKey=F6`

![Screenshot 2023-02-22 011758](https://screensaver01.zap-hosting.com/index.php/s/Qta7zsNA9ofo3dp/preview)

Na koniec zapisz plik i uruchom grę ponownie — teraz konsolę otworzysz klawiszem `F6`.

## Komendy konsoli

Tabela zawiera komendę, akceptowane wartości (jeśli dotyczy) oraz opis, który ułatwia zrozumienie działania.

Aby wyświetlić pełną listę komend, wpisz w konsoli `?`, co pokaże rozwijaną listę wszystkich dostępnych poleceń. Możesz poruszać się po niej za pomocą strzałek `GÓRA` i `DÓŁ`.

Przykład użycia `?` do wyświetlenia wszystkich komend znajdziesz poniżej.

![Screenshot 2023-02-22 015435](https://screensaver01.zap-hosting.com/index.php/s/gS7bSwCFNngz8yx/preview)

:::info
Wszystkie komendy wymienione na tej stronie dotyczą wersji vanilla Satisfactory.
:::

| Składnia komendy                  | Akceptowane wartości | Opis | 
| ----------------------- | ---------- | --------- | 
| ?      | -          | Wyświetla pełną listę komend         | 
| Stat FPS      | -          | Włącza/wyłącza wbudowany licznik FPS w grze         | 
| Stat UNIT      | -          | Włącza wyświetlanie czasu klatki, danych gry, czasu renderowania i innych statystyk         | 
| t.MaxFPS "maxfps"      | Liczba całkowita (np. 120)          | Ustawia maksymalną liczbę FPS w grze         | 
| r.ScreenPercentage "value"      | Liczba całkowita (domyślnie 100)          | Zmienia skalę rozdzielczości ekranu (dotyczy tylko renderowania świata, nie UI)         | 
| r.ViewDistanceScale "value"      | Liczba całkowita (domyślnie 1)          | Zmienia odległość renderowania obiektów takich jak skały czy drzewa         | 
| Suicide      | -          | Zabija twoją postać         | 
| FOV "value"      | Liczba całkowita (np. 90)          | Ustawia pole widzenia (FOV) w grze         | 
| r.Atmosphere "1 lub 0"      | true (1)/false (0)          | Włącza lub wyłącza atmosferę w grze        | 
| r.Fog "1 lub 0"      | true (1)/false (0)          | Włącza lub wyłącza mgłę w grze         | 
| Gamma "value"      | Liczba całkowita (domyślnie 50)          | Ustawia poziom jasności w grze         | 

Pełną, bardziej techniczną listę komend znajdziesz na [wiki Satisfactory](https://satisfactory.fandom.com/wiki/Console).

<InlineVoucher />