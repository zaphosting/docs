---
id: projectzomboid-rcon
title: "Project Zomboid: RCON"
description: "Dowiedz się, jak bezpiecznie zdalnie zarządzać i kontrolować serwery Project Zomboid bez dostępu w grze → Sprawdź teraz"
sidebar_label: RCON
services:
  - gameserver-projectzomboid
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

RCON (Remote Console) to protokół sieciowy służący do zdalnej kontroli serwerów gier. Umożliwia dostęp do konsoli serwera bez bezpośredniej interakcji ze środowiskiem serwera. Dzięki temu można wykonywać polecenia administracyjne, zmieniać parametry konfiguracji lub pobierać informacje o stanie serwera.

W Project Zomboid RCON służy do wykonywania poleceń po stronie serwera, takich jak zarządzanie graczami, zmiana ustawień rozgrywki czy dostęp do danych diagnostycznych. Połączenie jest chronione hasłem i działa przez określony port, dostępny za pomocą kompatybilnych klientów RCON.

Kluczową zaletą RCON jest to, że pozwala na zarządzanie serwerem **bez konieczności bycia połączonym z grą jako gracz**. Administratorzy serwera mogą monitorować i kontrolować Project Zomboid z zewnętrznych narzędzi, interfejsów wiersza poleceń lub paneli głównych, co daje elastyczność i wygodę zdalnej obsługi.

<InlineVoucher />

## Konfiguracja

Zanim będzie można korzystać z RCON, musi on zostać włączony i skonfigurowany. Robi się to poprzez edycję pliku konfiguracyjnego znajdującego się w zakładce **Configs** w panelu zarządzania serwerem gier. W pliku o nazwie `servertest.ini` należy dodać lub zmodyfikować następujące wpisy:

```cfg
RCONPort=XXXXX
RCONPassword=define-your-password
```
Przypisany port RCON znajdziesz na dole strony ustawień w przeglądzie portów i musi być tam podany.



## Łączenie przez RCON

Do połączenia się z serwerem Project Zomboid przez RCON używa się narzędzia wiersza poleceń **rcon-cli**. Można je pobrać z oficjalnego [repozytorium GitHub](https://github.com/gorcon/rcon-cli). Po pobraniu i zainstalowaniu narzędzia na swoim komputerze, połączenie można nawiązać, używając adresu IP serwera, portu RCON oraz hasła RCON.

Przypisany port znajdziesz w **przeglądzie portów** na dole strony ustawień w panelu administracyjnym serwera gier. Hasło i port muszą odpowiadać wartościom skonfigurowanym w panelu lub pliku konfiguracyjnym. Użyj poniższego polecenia, aby połączyć się i od razu wykonać polecenie:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## Polecenia RCON

Po połączeniu przez RCON można wykonywać różne polecenia administracyjne i diagnostyczne na serwerze Project Zomboid. Dostępne komendy zależą od silnika gry, ale zazwyczaj obejmują działania związane z zarządzaniem graczami, zapytaniami o status i kontrolą serwera.

| Polecenie                          | Opis                             |
| -------------------------------- | -------------------------------- |
| `/grantadmin <username>`         | Nadaje prawa administratora graczowi |
| `/removeadmin <username>`        | Odbiera prawa administratora graczowi |
| `/save`                          | Ręcznie zapisuje świat           |
| `/kickuser <username>`           | Wyrzuca gracza z serwera         |
| `/banuser <username>`            | Banuje gracza                    |
| `/unbanuser <username>`          | Odbanowuje gracza                |
| `/adduser <username> <password>` | Tworzy nowego użytkownika z hasłem |
| `/godmod <username>`             | Włącza lub wyłącza tryb boga dla wskazanego użytkownika |
| `/teleport <Name1> <Name2>`      | Teleportuje Name1 do Name2       |
| `/chopper`                       | Symuluje przelot helikoptera     |



## Podsumowanie

RCON to podstawowe narzędzie do zdalnej administracji serwerami gier Project Zomboid. Umożliwia szybki i bezpośredni dostęp do funkcji administracyjnych, oferując jednocześnie kontrolę dostępu przez uwierzytelnianie hasłem. Prawidłowa i bezpieczna konfiguracja jest kluczowa, aby zapewnić stabilność serwera i ochronę przed nieautoryzowanym dostępem.

W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />