---
id: dayz-rcon
title: "DayZ: RCON"
description: "Dowiedz się, jak efektywnie zdalnie zarządzać i kontrolować serwery gier DayZ bez konieczności łączenia się w grze → Sprawdź teraz"
sidebar_label: RCON
services:
  - gameserver-dayz
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

RCON (Remote Console) to protokół sieciowy służący do zdalnego zarządzania serwerami gier. Umożliwia dostęp do konsoli serwera bez bezpośredniej interakcji z jego środowiskiem. Dzięki temu można wykonywać polecenia administracyjne, zmieniać parametry konfiguracji lub pobierać informacje o stanie serwera.

W DayZ RCON służy do wykonywania poleceń po stronie serwera, takich jak zarządzanie graczami, zmiana ustawień rozgrywki czy dostęp do danych diagnostycznych. Połączenie jest chronione hasłem i działa przez określony port, dostępny za pomocą kompatybilnych klientów RCON.

Kluczową zaletą RCON jest możliwość zarządzania serwerem **bez konieczności bycia zalogowanym w grze jako gracz**. Administratorzy serwera mogą monitorować i kontrolować DayZ z poziomu zewnętrznych narzędzi, interfejsów wiersza poleceń lub paneli głównych, co daje dużą elastyczność i wygodę przy zdalnej obsłudze.

<InlineVoucher />

## Konfiguracja

Zanim będzie można korzystać z RCON, musi on zostać włączony i skonfigurowany. Można to zrobić bezpośrednio w panelu administracyjnym serwera gier. W sekcji **Ustawienia** znajduje się opcja **RCON**, którą należy aktywować. Trzeba ustawić bezpieczne hasło.

Przypisany port RCON znajdziesz na dole strony ustawień w **Przeglądzie portów**.



## Łączenie się przez RCON

Do połączenia z serwerem DayZ przez RCON używa się narzędzia **BattleWarden**. Można je pobrać z [oficjalnej strony](https://www.battlewarden.net). Po pobraniu i zainstalowaniu programu na komputerze, trzeba utworzyć nowy profil połączenia. Wymagane są następujące dane:

- Adres IP serwera  
- Port RCON  
- Hasło RCON

Po nawiązaniu połączenia można wykonywać polecenia RCON przez graficzny interfejs. Narzędzie oferuje też dodatkowe funkcje, takie jak lista graczy, czat na żywo czy historia poleceń, w zależności od integracji z grą.

![img](https://screensaver01.zap-hosting.com/index.php/s/P9S3rx3GFWkAo3G/preview)



## Polecenia RCON

Po połączeniu przez RCON można wykonywać różne polecenia administracyjne i diagnostyczne na serwerze DayZ. Dostępne komendy zależą od silnika gry, ale zazwyczaj obejmują zarządzanie graczami, zapytania o status i kontrolę serwera.

| Polecenie                      | Opis                                                  |
|-------------------------------|-------------------------------------------------------|
| `#login <hasło>`              | Loguje jako administrator RCON                         |
| `#logout`                    | Kończy sesję administratora                            |
| `#kick <nazwaGracza>`         | Wyrzuca gracza z serwera                               |
| `#ban <nazwaGracza>`          | Banuje gracza na stałe                                 |
| `#exec ban <playerID>`        | Banuje gracza przez Steam64ID (BattlEye)              |
| `#exec unban <playerID>`      | Odbanowuje wcześniej zbanowanego gracza               |
| `#shutdown`                  | Wyłącza serwer                                        |
| `#monitor <sekundy>`          | Pokazuje dane wydajności co x sekund                   |
| `#lock`                      | Blokuje serwer przed nowymi połączeniami               |
| `#unlock`                    | Odblokowuje serwer                                     |




## Podsumowanie

RCON to podstawowe narzędzie do zdalnej administracji serwerami gier DayZ. Umożliwia szybki i bezpośredni dostęp do funkcji administracyjnych, oferując jednocześnie kontrolę dostępu przez uwierzytelnianie hasłem. Prawidłowa i bezpieczna konfiguracja jest kluczowa dla stabilności serwera i ochrony przed nieautoryzowanym dostępem.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest do Twojej dyspozycji codziennie! 🙂

<InlineVoucher />