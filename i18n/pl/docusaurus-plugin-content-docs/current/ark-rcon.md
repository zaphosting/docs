---
id: ark-rcon
title: "ARK: Survival Evolved: RCON"
description: "Dowiedz się, jak zdalnie zarządzać i kontrolować serwery ARK: Survival Evolved bezpiecznie, bez konieczności dołączania do gry → Sprawdź teraz"
sidebar_label: RCON
services:
  - gameserver-ark
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

RCON (Remote Console) to protokół sieciowy służący do zdalnej kontroli serwerów gier. Pozwala na dostęp do konsoli serwera bez bezpośredniej interakcji z jego środowiskiem. Dzięki temu można wykonywać polecenia administracyjne, zmieniać parametry konfiguracji lub pobierać informacje o stanie serwera.

W ARK: Survival Evolved RCON służy do wykonywania poleceń po stronie serwera, takich jak zarządzanie graczami, zmiana ustawień rozgrywki czy dostęp do diagnostyki. Połączenie jest chronione hasłem i działa przez określony port, dostępny za pomocą kompatybilnych klientów RCON.

Kluczową zaletą RCON jest możliwość zarządzania serwerem **bez konieczności bycia zalogowanym w grze jako gracz**. Administratorzy serwera mogą monitorować i kontrolować ARK: Survival Evolved z zewnętrznych narzędzi, interfejsów wiersza poleceń lub paneli głównych, co daje dużą elastyczność i wygodę przy zdalnym zarządzaniu.

<InlineVoucher />

## Konfiguracja

Zanim RCON będzie można używać, musi zostać włączony i skonfigurowany. Robi się to poprzez edycję pliku konfiguracyjnego dostępnego w zakładce **Configs** w panelu zarządzania serwerem gier. W pliku o nazwie `GameUserSettings.ini` należy dodać lub zmodyfikować następujące wpisy:

```cfg
[ServerSettings]
RCONEnabled=True
ServerAdminPassword=twoje-haslo
```
Przypisany port RCON znajdziesz na dole strony ustawień w przeglądzie portów i musi być tam podany.



## Łączenie się przez RCON

Do połączenia się z serwerem ARK: Survival Evolved przez RCON używa się narzędzia **ARKon**. Można je pobrać z tego [wątku na Steam]([Steam thread](https://steamcommunity.com/app/346110/discussions/2/3417684283223117680/)). Po pobraniu i zainstalowaniu programu na komputerze, trzeba utworzyć nowy wpis serwera z następującymi danymi:

- Adres IP serwera  
- Port RCON  
- Hasło RCON  

Po zapisaniu profilu połączenia, serwer można wybrać z listy i nawiązać połączenie. Po połączeniu można wykonywać polecenia RCON przez graficzny interfejs. ARKon oferuje też dodatkowe funkcje dedykowane ARK: Survival Evolved, takie jak:

- Lista graczy i status online w czasie rzeczywistym  
- Monitorowanie i interakcja z czatem w grze  
- Szybkie przyciski do popularnych poleceń admina  
- Logowanie wyjścia RCON i historii poleceń



## Polecenia RCON

Po połączeniu przez RCON można wykonywać różne polecenia administracyjne i diagnostyczne na serwerze ARK: Survival Evolved. Dostępne komendy zależą od silnika gry, ale zazwyczaj obejmują zarządzanie graczami, zapytania o status i kontrolę serwera.

| Polecenie                            | Opis                                           |
|------------------------------------|------------------------------------------------|
| `EnableCheats <hasło>`              | Włącza tryb admina na serwerze (polecenia admina) |
| `AdminCheat KickPlayer <Steam64ID>` | Wyrzuca gracza                                  |
| `AdminCheat BanPlayer <Steam64ID>`  | Banuje gracza                                   |
| `AdminCheat UnbanPlayer <playerName>` | Odbanowuje gracza                             |
| `AdminCheat Broadcast <wiadomość>`  | Wysyła wiadomość do wszystkich graczy          |
| `AdminCheat SaveWorld`              | Zapisuje aktualny stan świata                    |
| `AdminCheat SetTimeOfDay <gg:mm>`   | Ustawia czas w grze                              |
| `AdminCheat TeleportPlayerIDToMe <playerID>` | Teleportuje gracza do twojej lokalizacji |
| `cheat Slomo <współczynnik>`        | Zmienia prędkość gry                             |
| `AdminCheat GiveItemNum <ItemID> <ilość> <jakość> 0` | Dodaje przedmioty do ekwipunku        |




## Podsumowanie

RCON to podstawowe narzędzie do zdalnej administracji serwerami gier ARK: Survival Evolved. Umożliwia szybki i bezpośredni dostęp do funkcji administracyjnych, jednocześnie zapewniając kontrolę dostępu przez uwierzytelnianie hasłem. Prawidłowa i bezpieczna konfiguracja jest kluczowa, by zapewnić stabilność serwera i ochronę przed nieautoryzowanym dostępem.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest do Twojej dyspozycji codziennie! 🙂

<InlineVoucher />