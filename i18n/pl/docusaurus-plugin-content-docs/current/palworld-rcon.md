---
id: palworld-rcon
title: "Palworld: RCON"
description: "Dowiedz się, jak zdalnie zarządzać serwerami Palworld, aby mieć elastyczną kontrolę i monitoring bez konieczności dołączania do gry → Sprawdź teraz"
sidebar_label: RCON
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

RCON (Remote Console) to protokół sieciowy służący do zdalnego zarządzania serwerami gier. Pozwala na dostęp do konsoli serwera bez bezpośredniej interakcji z jego środowiskiem. Dzięki temu można wykonywać polecenia administracyjne, zmieniać parametry konfiguracji lub pobierać informacje o stanie serwera.

W Palworld RCON służy do wykonywania poleceń po stronie serwera, takich jak zarządzanie graczami, zmiana ustawień rozgrywki czy dostęp do danych diagnostycznych. Połączenie jest chronione hasłem i działa przez określony port, dostępny za pomocą kompatybilnych klientów RCON.

Kluczową zaletą RCON jest możliwość zarządzania serwerem **bez konieczności bycia zalogowanym w grze jako gracz**. Administratorzy serwera mogą monitorować i kontrolować Palworld z zewnętrznych narzędzi, interfejsów wiersza poleceń lub paneli głównych, co daje dużą elastyczność i wygodę przy zdalnej obsłudze.

<InlineVoucher />

## Konfiguracja

Zanim będzie można korzystać z RCON, musi on zostać włączony i skonfigurowany. Robi się to poprzez edycję pliku konfiguracyjnego dostępnego w zakładce **Configs** w panelu zarządzania serwerem gier. W pliku o nazwie `PalWorldSettings.ini` należy dodać lub zmodyfikować następujące wpisy:

```cfg
RCONEnabled=True,
RCONPort=XXXXX,
AdminPassword="define-your-password"
```
Przypisany port RCON znajdziesz na dole strony ustawień w przeglądzie portów i musi być tam podany.



## Łączenie się przez RCON

Do połączenia z serwerem Palworld przez RCON używa się narzędzia wiersza poleceń **rcon-cli**. Można je pobrać z oficjalnego [repozytorium GitHub](https://github.com/gorcon/rcon-cli). Po pobraniu i zainstalowaniu narzędzia na komputerze, połączenie nawiązuje się podając adres IP serwera, port RCON oraz hasło RCON.

Przypisany port znajdziesz w **przeglądzie portów** na dole strony ustawień w panelu administracyjnym serwera gier. Hasło i port muszą zgadzać się z wartościami skonfigurowanymi w panelu lub pliku konfiguracyjnym. Użyj poniższego polecenia, aby połączyć się i od razu wykonać komendę:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## Komendy RCON

Po połączeniu przez RCON można wykonywać różne polecenia administracyjne i diagnostyczne na serwerze Palworld. Dostępne komendy zależą od silnika gry, ale zazwyczaj obejmują zarządzanie graczami, zapytania o status i kontrolę serwera.

| Komenda                                  | Opis                                                        |
|-----------------------------------------|-------------------------------------------------------------|
| `/Shutdown <seconds> <message>`          | Wyłącza serwer po odliczaniu z wyświetleniem wiadomości     |
| `/DoExit`                                | Natychmiast zatrzymuje serwer                               |
| `/Broadcast <message>`                   | Wysyła wiadomość do wszystkich podłączonych graczy          |
| `/KickPlayer <SteamID>`                  | Wyrzuca gracza po SteamID                                   |
| `/BanPlayer <SteamID>`                   | Trwale blokuje gracza                                       |
| `/TeleportToPlayer <SteamID>`            | Teleportuje cię do wskazanego gracza                         |
| `/TeleportToMe <SteamID>`                | Teleportuje wskazanego gracza do twojej lokalizacji         |
| `/ShowPlayers`                           | Wyświetla listę wszystkich aktualnie podłączonych graczy    |
| `/Info`                                  | Pokazuje podstawowe informacje o serwerze                   |
| `/Save`                                  | Ręcznie zapisuje świat                                      |



## Podsumowanie

RCON to podstawowe narzędzie do zdalnej administracji serwerami gier Palworld. Umożliwia szybki i bezpośredni dostęp do funkcji administracyjnych, jednocześnie zapewniając kontrolę dostępu przez uwierzytelnianie hasłem. Prawidłowa i bezpieczna konfiguracja jest kluczowa dla stabilności serwera i ochrony przed nieautoryzowanym dostępem.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest do Twojej dyspozycji codziennie! 🙂

<InlineVoucher />