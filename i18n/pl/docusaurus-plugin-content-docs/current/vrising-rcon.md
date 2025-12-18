---
id: vrising-rcon
title: "V Rising: RCON"
description: "Dowiedz się, jak efektywnie zdalnie zarządzać i kontrolować serwery V Rising bez konieczności łączenia się w grze → Sprawdź teraz"
sidebar_label: RCON
services:
  - gameserver-vrising
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

RCON (Remote Console) to protokół sieciowy używany do zdalnej kontroli serwerów gier. Pozwala na dostęp do konsoli serwera bez bezpośredniej interakcji ze środowiskiem serwera. Dzięki temu można wykonywać polecenia administracyjne, zmieniać parametry konfiguracji lub pobierać informacje o stanie serwera.

W V Rising RCON służy do wykonywania poleceń po stronie serwera, takich jak zarządzanie graczami, zmiana ustawień rozgrywki czy dostęp do danych diagnostycznych. Połączenie jest chronione hasłem i działa przez określony port, dostępny za pomocą kompatybilnych klientów RCON.

Kluczową zaletą RCON jest to, że umożliwia zarządzanie serwerem **bez konieczności bycia połączonym z grą jako gracz**. Administratorzy serwera mogą monitorować i kontrolować V Rising z zewnętrznych narzędzi, interfejsów wiersza poleceń lub paneli głównych, co daje elastyczność i wygodę zdalnej obsługi.

<InlineVoucher />

## Konfiguracja

Zanim będzie można korzystać z RCON, musi on zostać włączony i skonfigurowany. Robi się to poprzez edycję pliku konfiguracyjnego znajdującego się w sekcji **Configs** w panelu zarządzania serwerem gier. W pliku o nazwie `ServerHostSettings.json` należy dodać lub zmodyfikować następujące wpisy:

```cfg
  "Rcon": {
    "Enabled": false,
    "Port": XXXXX,
    "Password": "define-your-password"
  },
```

Przypisany port RCON znajdziesz na dole strony ustawień w przeglądzie portów, gdzie musi być on również podany.



## Łączenie się przez RCON

Do połączenia się z serwerem V Rising przez RCON używa się narzędzia wiersza poleceń **rcon-cli**. Można je pobrać z oficjalnego [repozytorium GitHub](https://github.com/gorcon/rcon-cli). Po pobraniu i zainstalowaniu narzędzia na komputerze, połączenie można nawiązać, używając adresu IP serwera, portu RCON oraz hasła RCON.

Przypisany port znajdziesz w **przeglądzie portów** na dole strony ustawień w panelu administracyjnym serwera gier. Hasło i port muszą odpowiadać wartościom skonfigurowanym w panelu lub pliku konfiguracyjnym. Użyj poniższego polecenia, aby połączyć się i od razu wykonać polecenie:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## Komendy RCON

Po połączeniu przez RCON można wykonywać różne polecenia administracyjne i diagnostyczne na serwerze V Rising. Dostępne komendy zależą od silnika gry, ale zazwyczaj obejmują działania związane z zarządzaniem graczami, zapytaniami o status i kontrolą serwera.

| Komenda                                    | Opis                                                          |
|--------------------------------------------|---------------------------------------------------------------|
| `adminauth`                                | Włącza prawa administratora dla twojej postaci (tylko w grze)|
| `admindeauth`                              | Wyłącza prawa administratora                                  |
| `banuser <SteamID>`                        | Trwale banuje gracza                                          |
| `unbanuser <SteamID>`                      | Usuwa bana z wcześniej zbanowanego gracza                     |
| `kick <playername>`                        | Natychmiast wyrzuca gracza z serwera                          |
| `give <ItemName> <Amount>`                 | Dodaje przedmioty bezpośrednio do twojego ekwipunku          |
| `teleport <X> <Y>`                         | Teleportuje twoją postać do podanych współrzędnych           |
| `teleportplayer <name> <X> <Y>`            | Teleportuje innego gracza do konkretnych współrzędnych       |
| `changehealth <value>`                     | Ustawia aktualny poziom zdrowia twojej postaci na określoną wartość |
| `spawn <EntityName> <Amount>`              | Tworzy NPC, stworzenia lub inne jednostki                      |



## Podsumowanie

RCON to podstawowe narzędzie do zdalnej administracji serwerami gier V Rising. Umożliwia szybki i bezpośredni dostęp do funkcji administracyjnych, oferując jednocześnie kontrolę dostępu przez uwierzytelnianie hasłem. Prawidłowa i bezpieczna konfiguracja jest kluczowa dla zapewnienia stabilności serwera i ochrony przed nieautoryzowanym dostępem.

W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />