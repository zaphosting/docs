---
id: tf2-becomeadmin
title: "Team Fortress 2: Zostań administratorem"
description: "Dowiedz się, jak przyznać uprawnienia administratora, aby mieć pełną kontrolę nad serwerem i lepsze zarządzanie w grze → Sprawdź teraz"
sidebar_label: Zostań adminem
services:
  - gameserver-tf2
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Wprowadzenie

Przyznanie uprawnień administratora pozwala na prostą i kompleksową administrację z pełną kontrolą nad Twoim serwerem. Jako administrator masz możliwość korzystania ze wszystkich dostępnych opcji i funkcji oferowanych przez grę bezpośrednio w trakcie rozgrywki. Wszystkie kroki, które musisz wykonać, aby przyznać uprawnienia administratora na swoim serwerze, opisane są poniżej.

<InlineVoucher />



## Konfiguracja

Aby zarejestrować się jako admin, konieczna jest instalacja SourceMod lub MetaMod. Dodatkowo będziesz potrzebować Steam ID swojego konta Steam. Istnieje kilka sposobów, aby je zdobyć: możesz skorzystać z zewnętrznej strony internetowej oferującej tę usługę lub pobrać je bezpośrednio przez konsolę w grze.


Aby uzyskać SteamID przez stronę internetową, najpierw otwórz swój profil Steam i kliknij prawym przyciskiem myszy gdziekolwiek na stronie, aby skopiować URL profilu. Następnie wklej ten URL na jednej z poniższych stron:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

Strona wyświetli Twój SteamID wraz z innymi informacjami o koncie. Do rejestracji admina potrzebujesz **SteamID32**:

```
steamID32: STEAM_0:1:XXXXXX
```

Alternatywnie możesz pobrać SteamID w grze przez konsolę. Uruchom grę, połącz się z serwerem, otwórz konsolę i wpisz komendę:

```
status
```

Wyświetli to szczegóły Twojego połączenia, w tym SteamID. Następnie połącz się z serwerem przez FTP i otwórz plik `admins.cfg` znajdujący się w:

```
.../addons/sourcemod/configs/
```

Plik zawiera przykładowy wpis, który możesz skopiować i dostosować:

```
Admins
{
	"Player name"
	{
		"auth" "steam"
		"identity" "STEAM_0:1:XXXXX"
		"flags" "abcdef"
	}
}
```

**Nazwa gracza** nie musi być zgodna z nazwą Twojego konta Steam; służy tylko do wewnętrznej identyfikacji. Pole `auth` definiuje metodę uwierzytelniania, która pozostaje `steam`. W `identity` wpisz SteamID32. `flags` określają uprawnienia przyznane adminowi:

| Uprawnienie  | Flaga | Opis |
|-------------|:-----:|------|
| rezerwacja  | a     | Rezerwacja slotu |
| ogólne      | b     | Podstawowe prawa (wymagane) |
| kick        | c     | Wyrzucanie graczy |
| ban         | d     | Banowanie graczy |
| unban       | e     | Odbanowanie graczy |
| slay        | f     | Uderzenie lub zabicie gracza |
| zmiana mapy | g     | Zmiana mapy |
| cvar        | h     | Zmiana wartości serwera |
| config      | i     | Wykonywanie konfiguracji serwera |
| chat        | j     | Zaawansowane prawa do czatu |
| głosowanie  | k     | Rozpoczynanie głosowań admina |
| hasło       | l     | Ustawianie hasła serwera |
| rcon        | m     | Wykonywanie komend RCON |
| cheaty      | n     | Włączanie `sv_cheats` |
| root        | z     | Pełny dostęp |

Możesz łączyć wiele flag (np. `bc` dla praw kick). Dla pełnego dostępu użyj tylko `z`. Menu admina otworzysz wpisując `admin` na czacie lub `sm_admin` w konsoli. Komendą `admin` na czacie lub `sm_admin` w konsoli wywołasz menu.



## Komendy administratora

Poniżej znajdziesz listę popularnych komend admina, które możesz używać jako administrator na swoim serwerze.

| Komenda                           | Opis                                         |
| -------------------------------- | -------------------------------------------- |
| `sm_kick <player>`                | Wyrzuca gracza                               |
| `sm_ban <player> <time> [reason]` | Banuje gracza na X minut (0 = na stałe)      |
| `sm_unban <SteamID/IP>`           | Odbanowuje gracza                            |
| `sm_slay <player>`                | Natychmiast zabija gracza                     |
| `sm_slap <player> [damage]`       | Uderza gracza (opcjonalnie z obrażeniami)    |
| `sm_map <mapname>`                | Zmienia na wskazaną mapę                      |
| `sm_cvar <cvar> <value>`          | Ustawia zmienną konfiguracyjną serwera w czasie gry |
| `sm_vote <topic>`                 | Rozpoczyna podstawowe głosowanie              |
| `sm_restartgame <seconds>`        | Restartuje grę po odliczaniu                   |
| `sm_say <message>`                | Wysyła wiadomość na globalny czat              |



## Podsumowanie

Gratulacje! Jeśli wykonałeś wszystko zgodnie z instrukcjami, powinieneś mieć poprawnie skonfigurowane uprawnienia administratora na swoim serwerze. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂

<InlineVoucher />