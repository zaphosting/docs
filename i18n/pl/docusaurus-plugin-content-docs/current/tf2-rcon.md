---
id: tf2-rcon
title: "Team Fortress 2: RCON"
description: "Dowiedz się, jak zdalnie zarządzać i kontrolować swój serwer gier Team Fortress 2 dla elastycznej administracji i monitoringu → Sprawdź teraz"
sidebar_label: RCON
services:
  - gameserver-tf2
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

RCON (Remote Console) to protokół sieciowy służący do zdalnej kontroli serwerów gier. Umożliwia dostęp do konsoli serwera bez bezpośredniej interakcji ze środowiskiem serwera. Dzięki temu można wykonywać polecenia administracyjne, zmieniać parametry konfiguracji lub pobierać informacje o stanie serwera.

W Team Fortress 2 RCON służy do wykonywania poleceń po stronie serwera, takich jak zarządzanie graczami, zmiana ustawień rozgrywki czy dostęp do danych diagnostycznych. Połączenie jest chronione hasłem i działa przez określony port, dostępny za pomocą kompatybilnych klientów RCON.

Kluczową zaletą RCON jest to, że pozwala na zarządzanie serwerem **bez konieczności bycia zalogowanym w grze jako gracz**. Administratorzy serwera mogą monitorować i kontrolować Team Fortress 2 z zewnętrznych narzędzi, interfejsów wiersza poleceń lub paneli głównych, co daje elastyczność i wygodę zdalnej obsługi.

<InlineVoucher />

## Konfiguracja

Zanim będzie można korzystać z RCON, musi on zostać włączony i skonfigurowany. Robi się to poprzez edycję pliku konfiguracyjnego znajdującego się w zakładce **Configs** w panelu zarządzania serwerem gier. W pliku o nazwie `server.cfg` należy dodać lub zmodyfikować następujący wpis:

```cfg
rcon_password "wpisz-swoje-hasło"
```


## Łączenie się przez RCON

Do połączenia z serwerem Team Fortress 2 przez RCON używa się narzędzia wiersza poleceń **rcon-cli**. Można je pobrać z oficjalnego [repozytorium GitHub](https://github.com/gorcon/rcon-cli). Po pobraniu i zainstalowaniu narzędzia na komputerze, połączenie można nawiązać, podając adres IP serwera, port RCON oraz hasło RCON.

Przypisany port znajdziesz w **Przeglądzie portów** na dole strony ustawień w panelu administracyjnym serwera gier. Hasło i port muszą zgadzać się z wartościami skonfigurowanymi w panelu lub pliku konfiguracyjnym. Użyj poniższego polecenia, aby połączyć się i od razu wykonać komendę:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```


## Komendy RCON

Po połączeniu przez RCON można wykonywać różne polecenia administracyjne i diagnostyczne na serwerze Team Fortress 2. Dostępne komendy zależą od silnika gry, ale zazwyczaj obejmują zarządzanie graczami, zapytania o status i kontrolę serwera.

| Komenda                      | Opis                                         |
| ---------------------------- | -------------------------------------------- |
| `rcon_password <password>`   | Uwierzytelnia dostęp do RCON                  |
| `status`                     | Wyświetla informacje o serwerze i graczach   |
| `changelevel <mapname>`      | Zmienia mapę na wskazaną                      |
| `mp_timelimit <min>`         | Ustawia limit czasu na mapę                    |
| `mp_roundtime <min>`         | Ustawia czas trwania rundy                     |
| `sv_cheats 0/1`              | Włącza/wyłącza komendy cheatów (tylko admin) |
| `kick <playername>`          | Wyrzuca gracza z serwera                       |
| `banid <duration> <SteamID>` | Banuje gracza na określony czas                |
| `exec <file.cfg>`            | Wykonuje plik konfiguracyjny                   |
| `say <message>`              | Wysyła wiadomość do wszystkich graczy          |

## Podsumowanie

RCON to podstawowe narzędzie do zdalnej administracji serwerami gier Team Fortress 2. Umożliwia szybki i bezpośredni dostęp do funkcji administracyjnych, zapewniając kontrolę dostępu przez uwierzytelnianie hasłem. Prawidłowa i bezpieczna konfiguracja jest kluczowa dla stabilności serwera i ochrony przed nieautoryzowanym dostępem.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />