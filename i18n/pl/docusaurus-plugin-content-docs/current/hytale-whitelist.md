---
id: hytale-whitelist
title: "Hytale: Konfiguracja i zarządzanie whitelistą"
description: "Dowiedz się, jak zabezpieczyć swój serwer Hytale, zarządzając dostępem graczy za pomocą funkcji whitelisty i chronić swoją rozgrywkę → Sprawdź teraz"
sidebar_label: Whitelist
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Whitelist to funkcja bezpieczeństwa i kontroli dostępu, która pozwala ograniczyć, kto może dołączyć do Twojego serwera Hytale. Po włączeniu, tylko gracze wyraźnie wymienieni na liście whitelisty mogą się połączyć. To szczególnie przydatne na serwerach prywatnych, społecznościowych, środowiskach deweloperskich lub podczas faz testowych, gdzie dostęp powinien mieć wyłącznie zaufany team.

:::info Informacja o Wczesnym Dostępie

Hytale zostało wydane 13 stycznia 2026 i jest obecnie dostępne we Wczesnym Dostępie. Ponieważ gra jest wciąż aktywnie rozwijana, oprogramowanie serwera, pliki konfiguracyjne, wsparcie modów oraz procesy instalacji mogą się zmieniać z czasem.

:::

![img](https://screensaver01.zap-hosting.com/index.php/s/mMjZWsYdmbnwQkQ/preview)



<InlineVoucher />

## Aktywuj whitelistę

Whitelistę możesz włączyć przez konsolę serwera lub bezpośrednio w grze. Upewnij się, że masz odpowiednie uprawnienia, np. prawa operatora, zanim wykonasz te komendy.

Aby włączyć whitelistę, wpisz:

```
/whitelist enable
```



Po włączeniu, każdy gracz, który nie znajduje się na liście whitelisty, zostanie zablokowany przy próbie dołączenia do serwera. Aby sprawdzić, czy whitelist jest aktywna, użyj:

```
/whitelist status
```

Ta komenda pokaże aktualny stan whitelisty i potwierdzi, że konfiguracja została poprawnie zastosowana.



## Dezaktywuj whitelistę

Jeśli chcesz ponownie pozwolić wszystkim graczom dołączać do serwera, whitelistę możesz wyłączyć w dowolnym momencie. Użyj komendy:

```
/whitelist disable
```

Po wyłączeniu whitelisty serwer przestanie ograniczać dostęp na jej podstawie i wszyscy gracze będą mogli się połączyć.



## Zarządzaj whitelistą

Whitelista może być zarządzana dynamicznie podczas działania serwera. Graczy można dodawać lub usuwać w dowolnym momencie bez potrzeby restartu serwera, korzystając z komend.



### Dodaj gracza do whitelisty

Aby dać konkretnemu graczowi dostęp do serwera, dodaj go do whitelisty:

```
/whitelist add <playername>
```

Wybrany gracz od razu będzie mógł dołączyć do serwera, pod warunkiem, że whitelist jest włączona.



### Usuń gracza z whitelisty

Aby cofnąć dostęp gracza, usuń go z whitelisty:

```
/whitelist remove <playername>
```

Po usunięciu gracz nie będzie mógł dołączyć, jeśli whitelist jest aktywna.



### Wyświetl listę graczy na whiteliście

Aby zobaczyć wszystkich graczy, którzy mają aktualnie dostęp do serwera, wpisz:

```
/whitelist list
```

Ta komenda wyświetli pełną listę nazw graczy na whitelistcie.



### Wyczyść whitelistę

Jeśli chcesz usunąć wszystkich graczy z whitelisty naraz, możesz ją całkowicie wyczyścić:

```
/whitelist clear
```

To usunie wszystkie wpisy z whitelisty, ale nie wyłączy samej whitelisty.



## Zarządzanie whitelistą przez plik

Oprócz komend, whitelistę można też zarządzać bezpośrednio przez plik konfiguracyjny. Ta metoda jest przydatna przy masowych zmianach lub przygotowywaniu whitelisty przed startem serwera. Plik odpowiedzialny za tę konfigurację to `whitelist.json` i znajduje się w katalogu serwera.

````
{
  "enabled": true,
  "players": [
    "PlayerName1",
    "PlayerName2"
  ]
}
````



## Podsumowanie

Gratulacje, pomyślnie skonfigurowałeś whitelistę na swoim serwerze Hytale. Twój serwer jest teraz ograniczony tylko do zatwierdzonych graczy, co pomaga Ci zachować kontrolę, prywatność i bezpieczniejsze środowisko multiplayer.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂