---
id: avorion-rcon
title: "Avorion: RCON"
description: "Dowiedz się, jak zdalnie zarządzać serwerami Avorion za pomocą RCON, zapewniając elastyczną i bezpieczną kontrolę bez konieczności dołączania do gry → Sprawdź teraz"
sidebar_label: RCON
services:
  - gameserver-avorion
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

RCON (Remote Console) to protokół sieciowy służący do zdalnego zarządzania serwerami gier. Umożliwia dostęp do konsoli serwera bez bezpośredniej interakcji ze środowiskiem serwera. Dzięki temu można wykonywać polecenia administracyjne, zmieniać parametry konfiguracji lub pobierać informacje o stanie serwera.

W Avorion RCON służy do wykonywania poleceń po stronie serwera, takich jak zarządzanie graczami, zmiana ustawień rozgrywki czy dostęp do danych diagnostycznych. Połączenie jest chronione hasłem i działa przez określony port, dostępny za pomocą kompatybilnych klientów RCON.

Kluczową zaletą RCON jest możliwość zarządzania serwerem **bez konieczności bycia połączonym z grą jako gracz**. Administratorzy serwera mogą monitorować i kontrolować Avorion z zewnętrznych narzędzi, interfejsów wiersza poleceń lub paneli głównych, co daje elastyczność i wygodę zdalnej obsługi.

<InlineVoucher />

## Konfiguracja

Zanim będzie można korzystać z RCON, musi on zostać włączony i skonfigurowany. Można to zrobić bezpośrednio w panelu administracyjnym serwera gier. W sekcji **Ustawienia** znajduje się opcja **RCON**, którą należy aktywować. Należy ustawić bezpieczne hasło.

Przypisany port RCON znajdziesz na dole strony ustawień w **Przeglądzie portów**. 



## Łączenie się przez RCON

Do połączenia się z serwerem Avorion przez RCON używa się narzędzia wiersza poleceń **rcon-cli**. Można je pobrać z oficjalnego [repozytorium GitHub](https://github.com/gorcon/rcon-cli). Po pobraniu i zainstalowaniu narzędzia na komputerze, połączenie można nawiązać, używając adresu IP serwera, portu RCON oraz hasła RCON.

Przypisany port znajdziesz w **Przeglądzie portów** na dole strony ustawień w panelu administracyjnym serwera gier. Hasło i port muszą odpowiadać wartościom skonfigurowanym w panelu lub pliku konfiguracyjnym. Użyj poniższego polecenia, aby połączyć się i bezpośrednio wykonać komendę:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## Komendy RCON

Po połączeniu przez RCON można wykonywać różne polecenia administracyjne i diagnostyczne na serwerze Avorion. Dostępne komendy zależą od silnika gry, ale zazwyczaj obejmują działania związane z zarządzaniem graczami, zapytaniami o status oraz kontrolą serwera.

| Komenda                                     | Opis                                                        |
|---------------------------------------------|-------------------------------------------------------------|
| `/save`                                     | Zapisuje aktualny świat gry                                 |
| `/status`                                   | Wyświetla status serwera i graczy                           |
| `/kick <playername>`                        | Wyrzuca gracza z serwera                                    |
| `/ban <playername>`                         | Banuje gracza na serwerze                                   |
| `/unban <playername>`                       | Usuwa bana dla gracza                                       |
| `/teleport <x> <y>`                         | Teleportuje gracza do podanych współrzędnych sektora       |
| `/tpto <playername>`                        | Teleportuje do innego gracza                                |
| `/sethome`                                  | Ustawia aktualny sektor jako domowy                         |
| `/home`                                     | Teleportuje do swojego sektora domowego                     |
| `/give <itemName> <amount>`                 | Daje przedmioty lub zasoby                                  |




## Podsumowanie

RCON to podstawowe narzędzie do zdalnej administracji serwerami gier Avorion. Umożliwia szybki i bezpośredni dostęp do funkcji administracyjnych, oferując jednocześnie kontrolę dostępu przez uwierzytelnianie hasłem. Prawidłowa i bezpieczna konfiguracja jest kluczowa, aby zapewnić stabilność serwera i ochronę przed nieautoryzowanym dostępem.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />