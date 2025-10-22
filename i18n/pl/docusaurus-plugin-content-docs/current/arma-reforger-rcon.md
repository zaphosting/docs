---
id: arma-reforger-rcon
title: "Arma Reforger: RCON"
description: "Dowiedz się, jak zdalnie zarządzać i kontrolować serwery Arma Reforger bezpiecznie, dla elastycznej administracji i monitoringu → Sprawdź teraz"
sidebar_label: RCON
services:
  - gameserver-arma-reforger
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

RCON (Remote Console) to protokół sieciowy używany do zdalnej kontroli serwerów gier. Pozwala na dostęp do konsoli serwera bez bezpośredniej interakcji ze środowiskiem serwera. Dzięki temu można wykonywać polecenia administracyjne, zmieniać parametry konfiguracji lub pobierać informacje o stanie serwera.

W Arma Reforger RCON służy do wykonywania poleceń po stronie serwera, takich jak zarządzanie graczami, zmiana ustawień rozgrywki czy dostęp do danych diagnostycznych. Połączenie jest chronione hasłem i działa przez określony port, dostępny za pomocą kompatybilnych klientów RCON.

Kluczową zaletą RCON jest to, że umożliwia zarządzanie serwerem **bez konieczności bycia zalogowanym w grze jako gracz**. Administratorzy serwera mogą monitorować i kontrolować Arma Reforger z zewnętrznych narzędzi, interfejsów wiersza poleceń lub paneli głównych, co daje elastyczność i wygodę zdalnej obsługi.

<InlineVoucher />

## Konfiguracja

Zanim będzie można korzystać z RCON, musi on zostać włączony i skonfigurowany. Robi się to poprzez edycję pliku konfiguracyjnego znajdującego się w zakładce **Configs** w panelu zarządzania serwerem gier. W pliku o nazwie `BEServer_x64.cfg` należy dodać lub zmodyfikować następujące wpisy:

```cfg
RConPort XXXXX
RConPassword define-your-password
```
Przypisany port RCON znajdziesz na dole strony ustawień w przeglądzie portów i musi być tam podany.



## Łączenie się przez RCON

Do połączenia z serwerem Arma Reforger przez RCON używa się narzędzia **BattleWarden**. Można je pobrać z [oficjalnej strony](https://www.battlewarden.net). Po pobraniu i zainstalowaniu programu na komputerze, trzeba utworzyć nowy profil połączenia. Wymagane są następujące dane:

- Adres IP serwera  
- Port RCON 
- Hasło RCON

Po nawiązaniu połączenia można wykonywać polecenia RCON przez graficzny interfejs. Narzędzie oferuje też dodatkowe funkcje, takie jak lista graczy, czat na żywo czy historia poleceń, w zależności od integracji z grą.

![img](https://screensaver01.zap-hosting.com/index.php/s/P9S3rx3GFWkAo3G/preview)



## Polecenia RCON

Po połączeniu przez RCON można wykonywać różne polecenia administracyjne i diagnostyczne na serwerze Arma Reforger. Dostępne komendy zależą od silnika gry, ale zwykle obejmują zarządzanie graczami, zapytania o status i kontrolę serwera.

| Polecenie                      | Opis                                               |
|-------------------------------|---------------------------------------------------|
| `#login <password>`            | Zaloguj się jako administrator serwera            |
| `#logout`                     | Wyloguj się z trybu administratora                 |
| `#mission <missionName>`       | Uruchamia nową misję na serwerze                    |
| `#missions`                   | Wyświetla listę dostępnych misji do wyboru          |
| `#restart`                    | Restartuje aktualną misję                            |
| `#reassign`                   | Przenosi wszystkich graczy z powrotem do przypisanych ról |
| `#kick <playerID>`            | Wyrzuca gracza z serwera                             |
| `#exec ban <playerID>`        | Banuje gracza                                        |
| `#exec unban <playerID>`      | Odbanowuje gracza                                   |
| `#shutdown`                   | Wyłącza serwer                                      |



## Podsumowanie

RCON to podstawowe narzędzie do zdalnej administracji serwerami gier Arma Reforger. Umożliwia szybki i bezpośredni dostęp do funkcji administracyjnych, jednocześnie zapewniając kontrolę dostępu przez uwierzytelnianie hasłem. Prawidłowa i bezpieczna konfiguracja jest kluczowa, aby zapewnić stabilność serwera i ochronę przed nieautoryzowanym dostępem.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />