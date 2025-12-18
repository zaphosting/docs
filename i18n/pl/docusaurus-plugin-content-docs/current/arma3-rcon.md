---
id: arma3-rcon
title: "Arma 3: RCON"
description: "Dowiedz się, jak bezpiecznie zdalnie zarządzać i kontrolować serwery Arma 3 bez konieczności dołączania do gry → Sprawdź teraz"
sidebar_label: RCON
services:
  - gameserver-arma3
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

RCON (Remote Console) to protokół sieciowy używany do zdalnego zarządzania serwerami gier. Pozwala na dostęp do konsoli serwera bez bezpośredniej interakcji ze środowiskiem serwera. Dzięki temu można wykonywać polecenia administracyjne, zmieniać parametry konfiguracji lub pobierać informacje o stanie serwera.

W Arma 3 RCON służy do wykonywania poleceń po stronie serwera, takich jak zarządzanie graczami, zmiana ustawień rozgrywki czy dostęp do danych diagnostycznych. Połączenie jest chronione hasłem i działa przez określony port, dostępny za pomocą kompatybilnych klientów RCON.

Kluczową zaletą RCON jest możliwość zarządzania serwerem **bez konieczności bycia połączonym z grą jako gracz**. Administratorzy serwera mogą monitorować i kontrolować Arma 3 z zewnętrznych narzędzi, interfejsów wiersza poleceń lub paneli głównych, co daje elastyczność i wygodę zdalnej obsługi.

<InlineVoucher />

## Konfiguracja

Zanim będzie można korzystać z RCON, musi on zostać włączony i skonfigurowany. Można to zrobić bezpośrednio w panelu administracyjnym serwera gier. W sekcji **Ustawienia** znajduje się opcja **RCON**, którą należy aktywować. Należy ustawić bezpieczne hasło.

Przypisany port RCON znajdziesz na dole strony ustawień w **Przeglądzie portów**.



## Łączenie się przez RCON

Do połączenia z serwerem Arma 3 przez RCON używa się narzędzia **BattleWarden**. Można je pobrać z [oficjalnej strony](https://www.battlewarden.net). Po pobraniu i zainstalowaniu programu na komputerze, trzeba utworzyć nowy profil połączenia. Wymagane są następujące dane:

- Adres IP serwera  
- Port RCON  
- Hasło RCON

Po nawiązaniu połączenia można wykonywać polecenia RCON przez graficzny interfejs. Narzędzie oferuje też dodatkowe funkcje, takie jak lista graczy, czat na żywo czy historia poleceń, w zależności od integracji z grą.

![img](https://screensaver01.zap-hosting.com/index.php/s/P9S3rx3GFWkAo3G/preview)



## Polecenia RCON

Po połączeniu przez RCON można wykonywać różne polecenia administracyjne i diagnostyczne na serwerze Arma 3. Dostępne komendy zależą od silnika gry, ale zazwyczaj obejmują zarządzanie graczami, zapytania o status i kontrolę serwera.

| Polecenie                      | Opis                                               |
|-------------------------------|---------------------------------------------------|
| `#login <hasło>`              | Zaloguj się jako administrator serwera            |
| `#logout`                    | Wyloguj się z trybu administratora                 |
| `#mission <nazwaMisji>`       | Uruchamia nową misję na serwerze                    |
| `#missions`                  | Wyświetla listę dostępnych misji do wyboru         |
| `#restart`                   | Restartuje aktualną misję                            |
| `#reassign`                  | Przenosi wszystkich graczy do przypisanych ról     |
| `#kick <IDgracza>`           | Wyrzuca gracza z serwera                             |
| `#exec ban <IDgracza>`       | Banuje gracza                                        |
| `#exec unban <IDgracza>`     | Odbanowuje gracza                                    |
| `#shutdown`                  | Wyłącza serwer                                       |



## Podsumowanie

RCON to podstawowe narzędzie do zdalnej administracji serwerami gier Arma 3. Umożliwia szybki i bezpośredni dostęp do funkcji administracyjnych, jednocześnie zapewniając kontrolę dostępu przez uwierzytelnianie hasłem. Prawidłowa i bezpieczna konfiguracja jest kluczowa, aby zapewnić stabilność serwera i ochronę przed nieautoryzowanym dostępem.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />