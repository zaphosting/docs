---
id: hytale-gamemode
title: "Hytale: Konfiguracja Trybu Gry"
description: "Dowiedz się, jak zabezpieczyć swój serwer Hytale, zarządzając dostępem graczy za pomocą whitelisty i chronić rozgrywkę → Sprawdź teraz"
sidebar_label: Tryb Gry
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Serwery Hytale pozwalają na konfigurację ustawień rozgrywki, takich jak tryb gry, który definiuje doświadczenie gracza. Zmiana trybu gry pozwala dostosować serwer do konkretnego stylu gry lub preferencji społeczności.

:::info Informacja o Wczesnym Dostępie

Hytale zostało wydane 13 stycznia 2026 i jest obecnie dostępne we Wczesnym Dostępie. Ponieważ gra jest nadal w aktywnej fazie rozwoju, oprogramowanie serwera, pliki konfiguracyjne, wsparcie modów oraz procesy instalacji mogą się z czasem zmieniać.

:::

![img](https://screensaver01.zap-hosting.com/index.php/s/KsesqALHY3AgKHF/preview)



## Zmiana trybu gry 

### Konsola na żywo
Tryb gry można zmienić podczas działania serwera, korzystając z konsoli na żywo lub komend w grze, pod warunkiem posiadania odpowiednich uprawnień. Ta metoda pozwala administratorom na zmianę trybu gry bez edytowania plików konfiguracyjnych.

Użycie komendy w konsoli natychmiast aktualizuje aktywny tryb gry dla bieżącej sesji serwera. W zależności od konfiguracji serwera, zmiana może utrzymać się do następnego restartu lub wrócić do wartości zdefiniowanej w pliku konfiguracyjnym.

```
/gamemode <tryb_gry> <nazwa_gracza>
```

Wartość `GameMode` określa, jaki tryb gry jest stosowany przy starcie serwera. W zależności od preferowanego stylu rozgrywki, tę wartość można odpowiednio dostosować.

Najczęściej używane wartości trybu gry to:

- `Creative` dla nieograniczonego budowania i tworzenia zawartości
- `Adventure` dla ustrukturyzowanej rozgrywki z określonym postępem i zasadami interakcji

Po zmianie wartości trybu gry serwer musi zostać zrestartowany, aby nowe ustawienie zaczęło działać.



### Plik konfiguracyjny

Tryb gry można zdefiniować bezpośrednio w pliku konfiguracyjnym serwera.  
Ta metoda jest zalecana, gdy chcesz, aby serwer zawsze startował z określonym trybem gry lub podczas przygotowywania świeżej instalacji serwera.

Plik konfiguracyjny jest dostępny przez panel administracyjny hostingu lub menedżer plików. W tym pliku znajduje się ustawienie kontrolujące aktywny tryb gry używany przy starcie serwera. Po zmianie tej wartości serwer musi zostać zrestartowany, aby zmiana weszła w życie.

```
"Defaults": {
"World": "default",
"GameMode": "Adventure"
},
```

Wartość `GameMode` określa, jaki tryb gry jest stosowany przy starcie serwera. W zależności od preferowanego stylu rozgrywki, tę wartość można odpowiednio dostosować.

Najczęściej używane wartości trybu gry to:

- `Creative` dla nieograniczonego budowania i tworzenia zawartości
- `Adventure` dla ustrukturyzowanej rozgrywki z określonym postępem i zasadami interakcji

Po zmianie wartości trybu gry serwer musi zostać zrestartowany, aby nowe ustawienie zaczęło działać.



## Podsumowanie

Konfigurując tryb gry przez plik konfiguracyjny serwera lub konsolę na żywo, możesz precyzyjnie kontrolować doświadczenie rozgrywki na swoim serwerze Hytale. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂