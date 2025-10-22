---
id: source-metamod-addadmins
title: Zostań administratorem serwera
description: "Dowiedz się, jak zostać adminem, zdobywając swój Steam ID i konfigurując uprawnienia do zarządzania serwerem → Sprawdź teraz"
sidebar_label: Zostań adminem
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Zostań administratorem

Aby móc zarejestrować się jako admin, niezbędna jest instalacja Source- / Metamod.

Dodatkowo potrzebujesz Steam ID swojego konta Steam. Istnieje kilka sposobów, aby je zdobyć. Możesz skorzystać z zewnętrznej strony oferującej taką usługę lub użyć konsoli w grze.

<InlineVoucher />

### SteamID przez stronę internetową

Najpierw otwórz profil w Steam, a następnie kliknij prawym przyciskiem myszy w dowolnym miejscu profilu. Możesz tam skopiować URL profilu Steam.

![](https://screensaver01.zap-hosting.com/index.php/s/5xbii7Kzmpa33KE/preview)

Następnie URL możesz wkleić na jednej z poniższych stron:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/wiMssSGFEXWSF9R/preview)

Po chwili otrzymasz Steam ID wraz z ogólnymi informacjami o koncie. Potrzebny jest tutaj **Steam ID 32**:

```
steamID32: STEAM_0:1:XXXXXX
```

### SteamID przez konsolę w grze

Uruchom grę i połącz się ze swoim serwerem. Otwórz konsolę w grze i wpisz komendę 'status', aby uzyskać następujący wynik:

```
] status
Connected to XXX.XXX.XXX.XX:XXXXX
hostname: Server Hosted by ZAP-Hosting.com
version : 1.37.1.1 secure
os : Linux
type : community dedicated
map : en_dust2
players : 1 humans, 0 bots (16/0 max) (not hibernating)

# userid name uniqueid connected ping loss state rate
# 2 1 "Player name" STEAM_1:1:XXXXXXXXX 44:39 30 0 active 196608
#end
```

### Konfiguracja

Następnie połącz się ponownie z serwerem przez FTP i otwórz plik konfiguracyjny admins.cfg. Znajdziesz go w katalogu: addons/sourcemod/configs

Plik zawiera już przykład wpisu admina. Możesz go skopiować i wprowadzić następująco:

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

**Nazwa gracza** nie musi się zgadzać z nazwą konta Steam. Służy tylko do przejrzystości w konfiguracji. Wpis 'auth' oznacza metodę uwierzytelniania. W tym przypadku jest to Steam, więc nie musisz tego zmieniać. W `identity` wpisujesz SteamID32 konta Steam. `flags` oznaczają uprawnienia. Istnieją różne poziomy dostępu.

| uprawnienie | flaga | zastosowanie |
| ------------|:-----:|:------------:|
| rezerwacja | a | rezerwacja slotu |
| podstawowe | b | podstawowe (wymagane) |
| kick | c | wyrzucanie graczy |
| ban | d | banowanie graczy |
| unban | e | odbanowanie graczy |
| slay | f | zabijanie graczy |
| zmiana mapy | g | zmiana mapy |
| cvar | h | zmiana wartości serwera |
| konfiguracja | i | uruchamianie konfiguracji serwera |
| czat | j | rozszerzone prawa do czatu |
| głosowanie | k | admin głosowania |
| hasło | l | ustawianie hasła serwera |
| rcon | m | wykonywanie komend RCON |
| cheat | n | aktywacja sv_cheats w grze |
| root | z | pełny dostęp |

W zależności od przydzielanych uprawnień, odpowiednie flagi wpisujesz jedna po drugiej. Na przykład, jeśli chcesz dać tylko prawo do kickowania, przypisujesz flagi 'b' i 'c'. Jeśli chcesz dać pełny dostęp, wystarczy flaga `z`.

### Korzystanie z menu admina

Menu wywołasz komendą 'admin' na czacie lub 'sm_admin' w konsoli.

![](https://screensaver01.zap-hosting.com/index.php/s/jwLWXJ99XeJJGSK/preview)

<InlineVoucher />