---
id: dods-rcon
title: "Day of Defeat: Source: RCON"
description: "Dowiedz się, jak zdalnie zarządzać serwerami Day of Defeat: Source dla elastycznej kontroli i monitoringu → Sprawdź teraz"
sidebar_label: RCON
services:
  - gameserver-dods
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

RCON (Remote Console) to protokół sieciowy używany do zdalnego zarządzania serwerami gier. Pozwala na dostęp do konsoli serwera bez bezpośredniej interakcji z jego środowiskiem. Dzięki temu można wykonywać polecenia administracyjne, zmieniać parametry konfiguracji lub pobierać informacje o stanie serwera.

W Day of Defeat: Source RCON służy do wykonywania poleceń po stronie serwera, takich jak zarządzanie graczami, zmiana ustawień rozgrywki czy dostęp do wyników diagnostycznych. Połączenie jest chronione hasłem i działa przez określony port, dostępny za pomocą kompatybilnych klientów RCON.

Kluczową zaletą RCON jest to, że umożliwia zarządzanie serwerem **bez konieczności łączenia się z grą jako gracz**. Administratorzy serwera mogą monitorować i kontrolować Day of Defeat: Source z poziomu zewnętrznych narzędzi, interfejsów wiersza poleceń lub paneli głównych, co daje dużą elastyczność i wygodę przy zdalnej obsłudze.

<InlineVoucher />

## Konfiguracja

Zanim RCON będzie mógł być używany, musi zostać włączony i skonfigurowany. Można to zrobić bezpośrednio w panelu administracyjnym serwera gier. W sekcji **Ustawienia** znajduje się opcja **RCON**, którą trzeba aktywować. Należy ustawić bezpieczne hasło oraz zdefiniować ważny port.

Przypisany port RCON znajdziesz na dole strony ustawień w **Przeglądzie portów**.

Zanim RCON będzie mógł być używany, musi zostać włączony i skonfigurowany. Robi się to poprzez edycję pliku konfiguracyjnego znajdującego się w zakładce **Konfiguracje** w panelu zarządzania serwerem gier. W pliku o nazwie `server.cfg` należy dodać lub zmodyfikować następujące wpisy:

```cfg
rcon_password "wpisz-swoje-haslo"
```


## Łączenie się przez RCON

Do połączenia się z serwerem Day of Defeat: Source przez RCON używa się narzędzia wiersza poleceń **rcon-cli**. Można je pobrać z oficjalnego [repozytorium GitHub](https://github.com/gorcon/rcon-cli). Po pobraniu i zainstalowaniu narzędzia na komputerze, połączenie można nawiązać, podając adres IP serwera, port RCON oraz hasło RCON.

Przypisany port znajdziesz w **Przeglądzie portów** na dole strony ustawień w panelu serwera gier. Hasło i port muszą odpowiadać wartościom skonfigurowanym w panelu lub pliku konfiguracyjnym. Użyj poniższego polecenia, aby połączyć się i od razu wykonać komendę:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## Komendy RCON

Po połączeniu przez RCON można wykonywać różne polecenia administracyjne i diagnostyczne na serwerze Day of Defeat: Source. Dostępne komendy zależą od silnika gry, ale zwykle obejmują działania związane z zarządzaniem graczami, zapytaniami o status i kontrolą serwera.

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

RCON to podstawowe narzędzie do zdalnej administracji serwerami gier Day of Defeat: Source. Umożliwia szybki i bezpośredni dostęp do funkcji administracyjnych, jednocześnie zapewniając kontrolę dostępu przez uwierzytelnianie hasłem. Prawidłowa i bezpieczna konfiguracja jest kluczowa, aby zapewnić stabilność serwera i ochronę przed nieautoryzowanym dostępem.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />