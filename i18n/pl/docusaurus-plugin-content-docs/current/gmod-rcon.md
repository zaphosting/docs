---
id: gmod-rcon
title: "Garry's Mod: RCON"
description: "Dowiedz się, jak zdalnie zarządzać serwerami Garry's Mod bezpiecznie i efektywnie, bez konieczności dołączania do gry → Sprawdź teraz"
sidebar_label: RCON
services:
  - gameserver-gmod
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

RCON (Remote Console) to protokół sieciowy służący do zdalnego zarządzania serwerami gier. Umożliwia dostęp do konsoli serwera bez bezpośredniej interakcji ze środowiskiem serwera. Dzięki temu można wykonywać polecenia administracyjne, zmieniać parametry konfiguracji lub pobierać informacje o stanie serwera.

W Garry's Mod RCON służy do wykonywania poleceń po stronie serwera, takich jak zarządzanie graczami, zmiana ustawień rozgrywki czy dostęp do danych diagnostycznych. Połączenie jest chronione hasłem i działa przez określony port, dostępny za pomocą kompatybilnych klientów RCON.

Kluczową zaletą RCON jest to, że pozwala na zarządzanie serwerem **bez konieczności bycia połączonym z grą jako gracz**. Administratorzy serwera mogą monitorować i kontrolować Garry's Mod z zewnętrznych narzędzi, interfejsów wiersza poleceń lub paneli głównych, co daje elastyczność i wygodę zdalnej obsługi.

<InlineVoucher />

## Konfiguracja

Zanim RCON będzie można używać, musi zostać włączony i skonfigurowany. Robi się to poprzez edycję pliku konfiguracyjnego znajdującego się w zakładce **Configs** w panelu zarządzania serwerem gier. W pliku o nazwie `server.cfg` należy dodać lub zmodyfikować następujący wpis:

```cfg
rcon_password "wpisz-swoje-hasło"
```


## Łączenie się przez RCON

Do połączenia z serwerem Garry's Mod przez RCON używa się narzędzia wiersza poleceń **rcon-cli**. Można je pobrać z oficjalnego [repozytorium GitHub](https://github.com/gorcon/rcon-cli). Po pobraniu i zainstalowaniu narzędzia na komputerze, połączenie można nawiązać, podając adres IP serwera, port RCON oraz hasło RCON.

Przypisany port znajdziesz w **Przeglądzie portów** na dole strony ustawień w panelu administracyjnym serwera gier. Hasło i port muszą odpowiadać wartościom skonfigurowanym w panelu lub pliku konfiguracyjnym. Użyj poniższego polecenia, aby połączyć się i od razu wykonać komendę:

```bash
rcon-cli -a <IP>:<PORT> -p <HASŁO> command
```


## Komendy RCON

Po połączeniu przez RCON można wykonywać różne polecenia administracyjne i diagnostyczne na serwerze Garry's Mod. Dostępne komendy zależą od silnika gry, ale zazwyczaj obejmują działania związane z zarządzaniem graczami, zapytaniami o status oraz kontrolą serwera.

| Komenda                      | Opis                                         |
| ---------------------------- | -------------------------------------------- |
| `rcon_password <hasło>`      | Uwierzytelnia dostęp do RCON                  |
| `status`                     | Wyświetla informacje o serwerze i graczach   |
| `changelevel <nazwa_mapy>`   | Zmienia mapę na wskazaną                       |
| `mp_timelimit <min>`         | Ustawia limit czasu na mapę                    |
| `mp_roundtime <min>`         | Ustawia czas trwania rundy                     |
| `sv_cheats 0/1`              | Włącza/wyłącza komendy cheatów (tylko admin) |
| `kick <nazwa_gracza>`        | Wyrzuca gracza z serwera                       |
| `banid <czas> <SteamID>`     | Banuje gracza na określony czas                |
| `exec <plik.cfg>`            | Wykonuje plik konfiguracyjny                   |
| `say <wiadomość>`            | Wysyła wiadomość do wszystkich graczy          |


## Podsumowanie

RCON to podstawowe narzędzie do zdalnej administracji serwerami gier Garry's Mod. Umożliwia szybki i bezpośredni dostęp do funkcji administracyjnych, oferując jednocześnie kontrolę dostępu przez uwierzytelnianie hasłem. Prawidłowa i bezpieczna konfiguracja jest kluczowa, aby zapewnić stabilność serwera i ochronę przed nieautoryzowanym dostępem.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest do Twojej dyspozycji codziennie! 🙂

<InlineVoucher />