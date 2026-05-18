---
id: hytale-whitelist
title: "Hytale: Konfiguracja i zarządzanie whitelistą"
description: "Dowiedz się, jak zabezpieczyć swój serwer gier Hytale, zarządzając dostępem graczy za pomocą funkcji whitelisty i chronić swoją rozgrywkę → Sprawdź teraz"
sidebar_label: Whitelist
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Whitelist to funkcja bezpieczeństwa i kontroli dostępu, która pozwala ograniczyć, kto może dołączyć do Twojego serwera gier Hytale. Po włączeniu, dostęp mają tylko gracze wyraźnie wymienieni na liście whitelisty. To szczególnie przydatne na prywatnych serwerach, serwerach społecznościowych, środowiskach deweloperskich lub podczas faz testowych, gdzie dostęp powinien mieć tylko zaufany gracz.

:::info Informacja o Wczesnym Dostępie

Hytale zostało wydane 13 stycznia 2026 i jest obecnie dostępne we Wczesnym Dostępie. Ponieważ gra jest wciąż w aktywnej fazie rozwoju, oprogramowanie serwera, pliki konfiguracyjne, wsparcie modów oraz procesy instalacji mogą się dalej zmieniać.

:::

![img](https://screensaver01.zap-hosting.com/index.php/s/mMjZWsYdmbnwQkQ/preview)



<InlineVoucher />

## Aktywacja whitelisty

Whitelistę można włączyć przez konsolę serwera lub bezpośrednio w grze. Upewnij się, że masz odpowiednie uprawnienia, np. prawa operatora, zanim wykonasz te komendy.

Aby włączyć whitelistę, wpisz następujące polecenie:

```
/whitelist enable
```



Po włączeniu, każdy gracz, który nie znajduje się na whitelistcie, nie będzie mógł dołączyć do serwera. Aby sprawdzić, czy whitelist jest aktywna, użyj:

```
/whitelist status
```

To polecenie pokaże aktualny stan whitelisty i potwierdzi, że konfiguracja została poprawnie zastosowana.



## Dezaktywacja whitelisty

Jeśli chcesz ponownie pozwolić wszystkim graczom na dołączenie do serwera, whitelistę można wyłączyć w dowolnym momencie. Użyj poniższego polecenia, aby ją dezaktywować:

```
/whitelist disable
```

Po wyłączeniu whitelisty serwer nie będzie już ograniczał dostępu na jej podstawie i wszyscy gracze będą mogli się połączyć.



## Zarządzanie whitelistą

Whitelistę można zarządzać dynamicznie podczas działania serwera. Graczy można dodawać lub usuwać w dowolnym momencie bez konieczności restartu serwera, korzystając z komend.



### Dodaj gracza do whitelisty

Aby dać konkretnemu graczowi dostęp do serwera, dodaj go do whitelisty za pomocą:

```
/whitelist add <playername>
```

Wskazany gracz od razu będzie mógł dołączyć do serwera, pod warunkiem, że whitelist jest włączona.



### Usuń gracza z whitelisty

Aby odebrać dostęp graczowi, usuń go z whitelisty:

```
/whitelist remove <playername>
```

Po usunięciu gracz nie będzie mógł dołączyć, gdy whitelist jest aktywna.



### Wyświetl listę graczy na whiteliście

Aby zobaczyć wszystkich graczy, którzy mają aktualnie dostęp do serwera, wpisz:

```
/whitelist list
```

To polecenie wyświetli pełną listę nazw graczy na whitelistcie.



### Wyczyść whitelistę

Jeśli chcesz usunąć wszystkich graczy z whitelisty naraz, możesz ją całkowicie wyczyścić:

```
/whitelist clear
```

To usunie wszystkie wpisy z whitelisty, ale nie wyłączy samej whitelisty.



## Zarządzanie whitelistą przez plik

Oprócz komend, whitelistę można też zarządzać bezpośrednio przez plik konfiguracyjny. Ta metoda jest przydatna przy masowych zmianach lub przygotowywaniu whitelisty przed uruchomieniem serwera. Plik odpowiedzialny za tę konfigurację to `whitelist.json` i znajduje się w katalogu serwera.

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

Gratulacje, pomyślnie skonfigurowałeś whitelistę na swoim serwerze gier Hytale. Twój serwer jest teraz ograniczony tylko do zatwierdzonych graczy, co pomaga Ci zachować kontrolę, prywatność i bezpieczniejsze środowisko multiplayer.

W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂