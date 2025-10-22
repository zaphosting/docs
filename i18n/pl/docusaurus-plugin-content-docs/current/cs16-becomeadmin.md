---
id: cs16-becomeadmin
title: "CS 1.6: Zostań adminem na swoim serwerze"
description: "Dowiedz się, jak przyznać uprawnienia administratora, aby mieć pełną kontrolę nad serwerem i lepsze zarządzanie w grze → Sprawdź teraz"
sidebar_label: Zostań adminem
services:
  - gameserver-cs16

---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Przyznanie uprawnień administratora pozwala na prostą i kompleksową administrację z pełną kontrolą nad Twoim serwerem. Jako admin masz możliwość korzystania ze wszystkich dostępnych opcji i funkcji oferowanych przez grę bezpośrednio w niej. Wszystkie kroki, które musisz wykonać, aby przyznać uprawnienia administratora na swoim serwerze, opisane są poniżej.  
<InlineVoucher />

## Konfiguracja
Dodanie admina odbywa się poprzez plik konfiguracyjny **users.ini**. Aby móc zostać adminem i znaleźć te pliki, musisz najpierw zainstalować **AMXmodX** oraz **Metamod**. Jeśli jeszcze tego nie zrobiłeś, warto zerknąć na ten poradnik: [Instalacja pluginów](cs16-plugins.md)

Aby edytować plik konfiguracyjny **users.ini**, musisz połączyć się z serwerem przez FTP. Następnie przejdź do katalogu ``/gXXXX/cs16/cstrike/addons/amxmodx/configs``. Kolejnym krokiem jest otwarcie pliku konfiguracyjnego w edytorze tekstu i jego modyfikacja.

<InlineVoucher />

```
...
; Przykłady kont adminów:
; "STEAM_0:0:123456" "" "abcdefghijklmnopqrstu" "ce"
; "123.45.67.89" "" "abcdefghijklmnopqrstu" "de"
; "My Name" "my_password" "abcdefghijklmnopqrstu" "a"

"loopback" "" "abcdefghijklmnopqrstu" "de"
```

W konfiguracji wpis ``"loopback" "" "abcdefghijklmnopqrstu" "en"`` musi zostać zmieniony. Kiedyś uwierzytelnianie odbywało się tylko przez nazwę i hasło. Obecnie odbywa się wyłącznie przez SteamID64. Swoje SteamID64 znajdziesz, otwierając swój profil Steam i klikając prawym przyciskiem myszy gdziekolwiek na nim. Następnie wybierz **Kopiuj adres URL Steam**.

Adres URL należy wkleić na jednej z poniższych stron:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/agXYcjRaDn8nSim/preview)

Otrzymasz tam ogólne informacje o koncie oraz Steam ID. W tym przypadku potrzebujemy tylko SteamID64. Steam ID należy dodać do wpisu klienta pod **SteamID**. Efekt końcowy wygląda tak:

```
"STEAM_0:0:XXXXXX" "" "abcdefghijklmnopqrstu" "ce"
```

Linia zawiera następujące informacje:

1. nazwa/SteamID - unikalny ID gracza.
2. hasło - brak, jeśli uwierzytelnianie przez Steam
3. poziom uprawnień
4. flagi połączenia - flagi kontrolują, jak AMX Mod X próbuje autoryzować łączącego się admina.

W tym przypadku nie jest potrzebne hasło, ponieważ uwierzytelnianie odbywa się przez Steam. Dlatego ustawiamy ``ce`` zamiast ``en``. Poniżej znajdziesz przegląd wszystkich poziomów uprawnień i flag połączenia:

**Poziom uprawnień**

| Poziom uprawnień | Opis                                                        |
| ---------------- | ------------------------------------------------------------ |
| a                | immunitet (nie można wyrzucić/zbanować/zabić/spoliczkować i nie działa na niego wiele komend) |
| b                | rezerwacja (może dołączyć na zarezerwowane sloty)            |
| c                | komenda amx_kick                                            |
| d                | komendy amx_ban i amx_unban                                 |
| e                | komendy amx_slay i amx_slap                                 |
| f                | komenda amx_map                                            |
| g                | komenda amx_cvar (nie wszystkie cvar będą dostępne)          |
| h                | komenda amx_cfg                                            |
| i                | komendy amx_chat i inne komendy czatu                       |
| j                | komendy amx_vote i inne komendy głosowania                  |
| k                | dostęp do cvar sv_password (przez komendę amx_cvar)          |
| l                | dostęp do komendy amx_rcon i cvar rcon_password (przez komendę amx_cvar) |
| m                | poziom niestandardowy A (dla dodatkowych pluginów)           |
| n                | poziom niestandardowy B (dla dodatkowych pluginów)           |
| o                | poziom niestandardowy C (dla dodatkowych pluginów)           |
| p                | poziom niestandardowy D (dla dodatkowych pluginów)           |
| q                | poziom niestandardowy E (dla dodatkowych pluginów)           |
| r                | poziom niestandardowy F (dla dodatkowych pluginów)           |
| s                | poziom niestandardowy G (dla dodatkowych pluginów)           |
| t                | poziom niestandardowy H (dla dodatkowych pluginów)           |
| u                | dostęp do menu                                              |
| z                | użytkownik (bez uprawnień admina)                           |

**Flagi połączenia**

| Flaga | Opis                                               |
| ----- | -------------------------------------------------- |
| a     | rozłącz gracza przy niepoprawnym haśle             |
| b     | tag klanu                                          |
| c     | to jest steamid/wonid                              |
| d     | to jest IP                                         |
| e     | hasło nie jest sprawdzane (wystarczy nazwa/IP/steamid) |

## Podsumowanie

Gratulacje, pomyślnie skonfigurowałeś uprawnienia administratora. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />