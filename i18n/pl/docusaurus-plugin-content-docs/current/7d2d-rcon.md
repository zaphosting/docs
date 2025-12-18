---
id: 7d2d-rcon
title: "7 Days to Die: RCON"
description: "Dowiedz się, jak zdalnie zarządzać i kontrolować serwery 7 Days to Die bez dostępu w grze, aby efektywnie administrować serwerem → Sprawdź teraz"
sidebar_label: RCON
services:
  - gameserver-7d2d
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

RCON (Remote Console) to protokół sieciowy służący do zdalnej kontroli serwerów gier. Pozwala na dostęp do konsoli serwera bez bezpośredniej interakcji z jego środowiskiem. Dzięki temu można wykonywać polecenia administracyjne, zmieniać parametry konfiguracji lub pobierać informacje o stanie serwera.

W 7 Days to Die RCON służy do wykonywania poleceń po stronie serwera, takich jak zarządzanie graczami, zmiana ustawień rozgrywki czy dostęp do danych diagnostycznych. Połączenie jest chronione hasłem i działa przez określony port, dostępny za pomocą kompatybilnych klientów RCON.

Kluczową zaletą RCON jest możliwość zarządzania serwerem **bez konieczności bycia zalogowanym w grze jako gracz**. Administratorzy serwera mogą monitorować i kontrolować 7 Days to Die z zewnętrznych narzędzi, interfejsów wiersza poleceń lub paneli webowych, co daje dużą elastyczność i wygodę zdalnej obsługi.

<InlineVoucher />

## Konfiguracja

Zanim RCON będzie można używać, musi zostać włączony i skonfigurowany. Można to zrobić bezpośrednio w panelu administracyjnym serwera gier. W sekcji **Ustawienia** znajduje się opcja **RCON**, którą trzeba aktywować. Należy ustawić bezpieczne hasło oraz określić ważny port.

Przypisany port RCON znajdziesz na dole strony ustawień w **Przeglądzie portów**.

RCON wymaga również edycji pliku konfiguracyjnego, który znajduje się w zakładce **Konfiguracje** w panelu zarządzania serwerem gier. W pliku o nazwie `serverconfig.xml` należy dodać lub zmodyfikować następujący wpis:

```cfg
<property name="TelnetPassword" value="wpisz-swoje-haslo-tutaj"/>
```

Przypisany port RCON znajdziesz na dole strony ustawień w Przeglądzie portów i musi być tam podany.

## Łączenie się przez RCON

Do połączenia się z serwerem 7 Days to Die przez RCON używa się narzędzia wiersza poleceń **rcon-cli**. Można je pobrać z oficjalnego [repozytorium GitHub](https://github.com/gorcon/rcon-cli). Po pobraniu i zainstalowaniu narzędzia na komputerze, połączenie nawiązuje się za pomocą adresu IP serwera, portu RCON oraz hasła RCON.

Przypisany port znajdziesz w **Przeglądzie portów** na dole strony ustawień w panelu serwera gier. Hasło i port muszą odpowiadać wartościom skonfigurowanym w panelu lub pliku konfiguracyjnym. Użyj poniższego polecenia, aby połączyć się i od razu wykonać komendę:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> -t telnet command
```

## Komendy RCON

Po połączeniu przez RCON można wykonywać różne polecenia administracyjne i diagnostyczne na serwerze 7 Days to Die. Dostępne komendy zależą od silnika gry, ale zwykle obejmują zarządzanie graczami, zapytania o status oraz kontrolę serwera.

| Komenda                | Opis                                         |
|------------------------|----------------------------------------------|
| `dm` lub `debugmenu on` | Włącza tryb deweloperski                     |
| `giveme <ItemName> <count>` | Daje sobie przedmiot                      |
| `buffplayer <ID> <buff>` | Nadaje buff graczowi                         |
| `tele <x> <y> <z>`     | Teleportuje do współrzędnych                  |
| `settime <seconds>`     | Ustawia aktualny czas w grze                   |
| `setgameday <day>`      | Ustawia aktualny dzień gry                      |
| `spawnentity <ID>`      | Tworzy jednostkę o podanym ID                   |
| `kick <player>`         | Wyrzuca gracza z serwera                        |
| `ban <address>`         | Banuje adres IP lub gracza                      |
| `saveworld`             | Ręcznie zapisuje stan świata                     |

## Podsumowanie

RCON to podstawowe narzędzie do zdalnej administracji serwerami gier 7 Days to Die. Umożliwia szybki i bezpośredni dostęp do funkcji administracyjnych, jednocześnie zapewniając kontrolę dostępu przez uwierzytelnianie hasłem. Prawidłowa i bezpieczna konfiguracja jest kluczowa, aby zapewnić stabilność serwera i ochronę przed nieautoryzowanym dostępem.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest do Twojej dyspozycji codziennie! 🙂

<InlineVoucher />