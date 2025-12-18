---
id: nmrih-rcon
title: "No More Room In Hell: RCON"
description: "Dowiedz się, jak zdalnie zarządzać serwerami No More Room In Hell dla elastycznej kontroli i monitoringu → Sprawdź teraz"
sidebar_label: RCON
services:
  - gameserver-nmrih
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

RCON (Remote Console) to protokół sieciowy używany do zdalnego zarządzania serwerami gier. Pozwala na dostęp do konsoli serwera bez bezpośredniej interakcji z jego środowiskiem. Dzięki temu można wykonywać polecenia administracyjne, zmieniać parametry konfiguracji lub pobierać informacje o stanie serwera.

W No More Room In Hell RCON służy do wykonywania poleceń po stronie serwera, takich jak zarządzanie graczami, zmiana ustawień rozgrywki czy dostęp do danych diagnostycznych. Połączenie jest chronione hasłem i działa przez określony port, dostępny za pomocą kompatybilnych klientów RCON.

Kluczową zaletą RCON jest możliwość zarządzania serwerem **bez konieczności bycia podłączonym do gry jako gracz**. Administratorzy serwera mogą monitorować i kontrolować No More Room In Hell z zewnętrznych narzędzi, interfejsów wiersza poleceń lub paneli głównych, co daje dużą elastyczność i wygodę zdalnej obsługi.

<InlineVoucher />

## Konfiguracja

Zanim będzie można korzystać z RCON, musi on zostać włączony i skonfigurowany. Robi się to poprzez edycję pliku konfiguracyjnego dostępnego w zakładce **Konfiguracje** w panelu zarządzania serwerem gier. W pliku o nazwie `server.cfg` należy dodać lub zmodyfikować następujący wpis:

```cfg
rcon_password "wpisz-swoje-haslo"
```


## Łączenie się przez RCON

Do połączenia z serwerem No More Room In Hell przez RCON używa się narzędzia wiersza poleceń **rcon-cli**. Można je pobrać z oficjalnego [repozytorium GitHub](https://github.com/gorcon/rcon-cli). Po pobraniu i zainstalowaniu narzędzia na komputerze, połączenie nawiązuje się podając adres IP serwera, port RCON oraz hasło RCON.

Przypisany port znajdziesz w **Przeglądzie portów** na dole strony ustawień w panelu administracyjnym serwera gier. Hasło i port muszą odpowiadać wartościom skonfigurowanym w panelu lub pliku konfiguracyjnym. Użyj poniższego polecenia, aby połączyć się i od razu wykonać komendę:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```


## Komendy RCON

Po połączeniu przez RCON można wykonywać różne polecenia administracyjne i diagnostyczne na serwerze No More Room In Hell. Dostępne komendy zależą od silnika gry, ale zazwyczaj obejmują zarządzanie graczami, zapytania o status oraz kontrolę serwera.

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

RCON to podstawowe narzędzie do zdalnej administracji serwerami gier No More Room In Hell. Umożliwia szybki i bezpośredni dostęp do funkcji administracyjnych, jednocześnie zapewniając kontrolę dostępu przez uwierzytelnianie hasłem. Prawidłowa i bezpieczna konfiguracja jest kluczowa dla stabilności serwera oraz ochrony przed nieautoryzowanym dostępem.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest do Twojej dyspozycji codziennie! 🙂

<InlineVoucher />