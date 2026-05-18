---
id: humanitz-rcon
title: "HumanitZ: RCON"
description: "Dowiedz się, jak zdalnie zarządzać swoim serwerem HumanitZ za pomocą RCON i rcon-cli → Sprawdź teraz"
sidebar_label: RCON
services:
- gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

RCON (Remote Console) to protokół sieciowy służący do zdalnego zarządzania serwerami gier. Pozwala administratorom na wykonywanie komend na serwerze bez konieczności bezpośredniego łączenia się z grą. Dzięki temu możesz zarządzać graczami, zmieniać ustawienia lub monitorować aktywność serwera zdalnie.

W **HumanitZ** RCON umożliwia wykonywanie komend administracyjnych, takich jak wyrzucanie graczy, wysyłanie wiadomości czy kontrolowanie zachowania serwera. Dostęp jest zabezpieczony hasłem i dedykowanym portem.

Największą zaletą RCON jest możliwość zarządzania serwerem **bez konieczności bycia zalogowanym jako gracz w grze**, co daje elastyczność i wygodę zdalnej administracji.

<InlineVoucher />

## Konfiguracja

Zanim zaczniesz korzystać z RCON, musisz go włączyć w konfiguracji serwera. Otwórz stronę ustawień swojego serwera i aktywuj opcję rcon. Możesz też zmodyfikować pliki konfiguracyjne. Wejdź do panelu zarządzania serwerem gier, przejdź do Configs i znajdź plik `GameServerSettings.ini`.

Dodaj lub zmodyfikuj następujące wpisy:

```
RCONEnabled=true
RCONPassword=twoje_bezpieczne_haslo
RCONPort=XXXXX
```

Przypisany port RCON znajdziesz w **przeglądzie portów** w panelu administracyjnym serwera. Upewnij się, że hasło i port zgadzają się z Twoją konfiguracją.

Po wprowadzeniu zmian zapisz plik i **zrestartuj serwer**, aby ustawienia zaczęły działać.

## Łączenie się przez RCON

Aby połączyć się z serwerem HumanitZ przez RCON, możesz użyć narzędzia wiersza poleceń **rcon-cli**. Jest dostępne na oficjalnym repozytorium GitHub:
https://github.com/gorcon/rcon-cli

Po instalacji połącz się z serwerem za pomocą polecenia:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```

Podmień placeholdery na adres IP serwera, port RCON oraz hasło.

To polecenie pozwala na bezpośrednie wykonywanie komend RCON z Twojego lokalnego systemu bez potrzeby interaktywnej sesji.

## Komendy RCON

Po połączeniu przez RCON możesz wykonywać różne komendy administracyjne na swoim serwerze HumanitZ. Dostępne komendy zależą od implementacji gry, ale zazwyczaj obejmują zarządzanie graczami i kontrolę serwera.

| Komenda | Opis |
|----------------------------------|------------------------------------------|
| `broadcast <message>`| Wysyła wiadomość do wszystkich graczy |
| `kick <playername>`| Wyrzuca gracza z serwera |
| `ban <playername>` | Banuje gracza |
| `unban <playername>` | Odbanowuje gracza |
| `save` | Zapisuje aktualny stan gry |
| `restart`| Restartuje serwer |
| `shutdown` | Wyłącza serwer |
| `whitelist add <steamid>`| Dodaje gracza do whitelisty |
| `whitelist remove <steamid>` | Usuwa gracza z whitelisty |

## Podsumowanie

Gratulacje! Pomyślnie skonfigurowałeś i użyłeś **RCON na swoim serwerze HumanitZ**. Teraz możesz zdalnie zarządzać serwerem, wykonywać komendy administracyjne i mieć pełną kontrolę bez konieczności dołączania do gry.

Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />