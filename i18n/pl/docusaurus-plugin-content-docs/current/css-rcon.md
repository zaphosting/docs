---
id: css-rcon
title: "Counter-Strike: Source: RCON"
description: "Dowiedz się, jak zdalnie zarządzać i kontrolować serwery Counter-Strike: Source bezpiecznie i efektywnie → Sprawdź teraz"
sidebar_label: RCON
services:
  - gameserver-css
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

RCON (Remote Console) to protokół sieciowy służący do zdalnego zarządzania serwerami gier. Pozwala na dostęp do konsoli serwera bez bezpośredniej interakcji z jego środowiskiem. Dzięki temu można wykonywać polecenia administracyjne, zmieniać parametry konfiguracji lub pobierać informacje o stanie serwera.

W Counter-Strike: Source RCON służy do wykonywania poleceń po stronie serwera, takich jak zarządzanie graczami, zmiana ustawień rozgrywki czy dostęp do danych diagnostycznych. Połączenie jest chronione hasłem i działa przez określony port, dostępny za pomocą kompatybilnych klientów RCON.

Kluczową zaletą RCON jest to, że umożliwia zarządzanie serwerem **bez konieczności łączenia się z grą jako gracz**. Administratorzy serwera mogą monitorować i kontrolować Counter-Strike: Source z poziomu zewnętrznych narzędzi, konsoli poleceń lub paneli webowych, co daje dużą elastyczność i wygodę przy zdalnej obsłudze.

<InlineVoucher />

## Konfiguracja

Zanim RCON będzie można używać, musi zostać włączone i skonfigurowane. Robi się to poprzez edycję pliku konfiguracyjnego znajdującego się w zakładce **Configs** w panelu zarządzania serwerem gier. W pliku o nazwie `server.cfg` należy dodać lub zmodyfikować następujący wpis:

```cfg
rcon_password "wpisz-swoje-hasło"
```


## Łączenie się przez RCON

Do połączenia z serwerem Counter-Strike: Source przez RCON używa się narzędzia wiersza poleceń **rcon-cli**. Można je pobrać z oficjalnego [repozytorium GitHub](https://github.com/gorcon/rcon-cli). Po pobraniu i zainstalowaniu narzędzia na komputerze, połączenie nawiązuje się podając adres IP serwera, port RCON oraz hasło RCON.

Przypisany port znajdziesz w **Przeglądzie portów** na dole strony ustawień w panelu administracyjnym serwera gier. Hasło i port muszą odpowiadać wartościom skonfigurowanym w panelu lub pliku konfiguracyjnym. Użyj poniższego polecenia, aby połączyć się i od razu wykonać komendę:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```


## Komendy RCON

Po połączeniu przez RCON można wykonywać różne polecenia administracyjne i diagnostyczne na serwerze Counter-Strike: Source. Dostępne komendy zależą od silnika gry, ale zazwyczaj obejmują zarządzanie graczami, zapytania o status oraz kontrolę serwera.

| Komenda                    | Opis                                      |
|---------------------------|-------------------------------------------|
| `rcon_password <password>`   | Autoryzacja jako administrator RCON     |
| `status`               | Pokazuje informacje o graczach i serwerze |
| `changelevel <map>`   | Zmienia mapę                              |
| `mp_autoteambalance 0/1` | Włącza/wyłącza automatyczne balansowanie drużyn |
| `mp_timelimit <minutes>` | Ustawia limit czasu mapy                 |
| `mp_friendlyfire 0/1`    | Włącza/wyłącza friendly fire             |
| `mp_freezetime <seconds>` | Ustawia czas zamrożenia na początku rundy |
| `sv_cheats 0/1`         | Włącza cheaty (tylko dla adminów)        |
| `exec <file.cfg>`       | Wykonuje plik konfiguracyjny             |
| `kick <player>`         | Wyrzuca gracza z serwera                  |


## Podsumowanie

RCON to podstawowe narzędzie do zdalnej administracji serwerami gier Counter-Strike: Source. Umożliwia szybki i bezpośredni dostęp do funkcji administracyjnych, jednocześnie zapewniając kontrolę dostępu przez uwierzytelnianie hasłem. Prawidłowa i bezpieczna konfiguracja jest kluczowa, by zapewnić stabilność serwera i ochronę przed nieautoryzowanym dostępem.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />