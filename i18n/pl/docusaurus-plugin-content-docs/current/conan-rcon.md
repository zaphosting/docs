---
id: conan-rcon
title: "Conan Exiles: RCON"
description: "Dowiedz się, jak bezpiecznie zdalnie zarządzać i kontrolować serwery Conan Exiles bez konieczności łączenia się w grze → Sprawdź teraz"
sidebar_label: RCON
services:
  - gameserver-conan
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

RCON (Remote Console) to protokół sieciowy służący do zdalnej kontroli serwerów gier. Umożliwia dostęp do konsoli serwera bez bezpośredniej interakcji ze środowiskiem serwera. Dzięki temu można wykonywać polecenia administracyjne, zmieniać parametry konfiguracyjne lub pobierać informacje o stanie serwera.

W Conan Exiles RCON służy do wykonywania poleceń po stronie serwera, takich jak zarządzanie graczami, zmiana ustawień rozgrywki czy dostęp do danych diagnostycznych. Połączenie jest chronione hasłem i działa na określonym porcie, dostępnym przez kompatybilnych klientów RCON.

Kluczową zaletą RCON jest to, że pozwala na zarządzanie serwerem **bez konieczności bycia połączonym z grą jako gracz**. Administratorzy serwera mogą monitorować i kontrolować Conan Exiles z poziomu zewnętrznych narzędzi, interfejsów wiersza poleceń lub paneli głównych, co daje elastyczność i wygodę zdalnej obsługi.

<InlineVoucher />

## Konfiguracja

Zanim będzie można korzystać z RCON, musi on zostać włączony i skonfigurowany. Robi się to poprzez edycję pliku konfiguracyjnego znajdującego się w zakładce **Configs** w panelu zarządzania serwerem gier. W pliku o nazwie `game.ini` należy dodać lub zmodyfikować następujące wpisy:

```cfg
[RconPlugin]
RconEnabled=1
RconPassword=twoje-haslo
RconPort=XXXXX
```
Przypisany port RCON znajdziesz na dole strony ustawień w przeglądzie portów i musi być tam podany.



## Łączenie się przez RCON

Do połączenia z serwerem Conan Exiles przez RCON używa się narzędzia wiersza poleceń **rcon-cli**. Można je pobrać z oficjalnego [repozytorium GitHub](https://github.com/gorcon/rcon-cli). Po pobraniu i zainstalowaniu narzędzia na komputerze, połączenie można nawiązać, podając adres IP serwera, port RCON oraz hasło RCON.

Przypisany port znajdziesz w **przeglądzie portów** na dole strony ustawień w panelu administracyjnym serwera gier. Hasło i port muszą odpowiadać wartościom skonfigurowanym w panelu lub pliku konfiguracyjnym. Użyj poniższego polecenia, aby połączyć się i od razu wykonać komendę:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## Komendy RCON

Po połączeniu przez RCON można wykonywać różne polecenia administracyjne i diagnostyczne na serwerze Conan Exiles. Dostępne komendy zależą od silnika gry, ale zazwyczaj obejmują działania związane z zarządzaniem graczami, zapytaniami o status i kontrolą serwera.

| Komenda                     | Opis                              |
| --------------------------- | -------------------------------- |
| `broadcast <message>`       | Wysyła wiadomość do wszystkich graczy |
| `kick <playername>`         | Wyrzuca gracza z serwera         |
| `ban <playername>`          | Banuje gracza                    |
| `unban <playername>`        | Odbanowuje gracza                |
| `restartserver`             | Restartuje serwer                |
| `restartserver <seconds>`   | Restartuje serwer z opóźnieniem  |
| `shutdownserver`            | Wyłącza serwer                   |
| `shutdownserver <seconds>`  | Wyłącza serwer z opóźnieniem     |
| `changemap <mapname>`       | Ładuje inną mapę                 |
| `setpassword <newpassword>` | Ustawia nowe hasło RCON          |

## Podsumowanie

RCON to podstawowe narzędzie do zdalnej administracji serwerami gier Conan Exiles. Umożliwia szybki i bezpośredni dostęp do funkcji administracyjnych, oferując jednocześnie kontrolę dostępu przez uwierzytelnianie hasłem. Prawidłowa i bezpieczna konfiguracja jest kluczowa, aby zapewnić stabilność serwera i ochronę przed nieautoryzowanym dostępem.

W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest do Twojej dyspozycji codziennie! 🙂

<InlineVoucher />