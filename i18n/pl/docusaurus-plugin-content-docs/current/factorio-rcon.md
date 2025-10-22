---
id: factorio-rcon
title: "Factorio: RCON"
description: "Dowiedz się, jak zdalnie zarządzać i kontrolować swój serwer gier Factorio, aby efektywnie administrować i dostosowywać rozgrywkę → Sprawdź teraz"
sidebar_label: RCON
services:
  - gameserver-factorio
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

RCON (Remote Console) to protokół sieciowy służący do zdalnej kontroli serwerów gier. Umożliwia dostęp do konsoli serwera bez bezpośredniej interakcji ze środowiskiem serwera. Dzięki temu można wykonywać polecenia administracyjne, zmieniać parametry konfiguracji lub pobierać informacje o stanie serwera.

W Factorio RCON służy do wykonywania poleceń po stronie serwera, takich jak zarządzanie graczami, zmiana ustawień rozgrywki czy dostęp do danych diagnostycznych. Połączenie jest chronione hasłem i działa przez określony port, dostępny za pomocą kompatybilnych klientów RCON.

Kluczową zaletą RCON jest to, że pozwala na zarządzanie serwerem **bez konieczności bycia zalogowanym w grze jako gracz**. Administratorzy serwera mogą monitorować i kontrolować Factorio z zewnętrznych narzędzi, interfejsów wiersza poleceń lub paneli webowych, co daje elastyczność i wygodę zdalnej obsługi.

<InlineVoucher />

## Konfiguracja

Zanim RCON będzie można używać, musi zostać włączony i skonfigurowany. Można to zrobić bezpośrednio w panelu administracyjnym serwera gier. W sekcji **Ustawienia** znajduje się opcja **RCON**, którą trzeba aktywować. Należy ustawić bezpieczne hasło.

Przypisany port RCON znajdziesz na dole strony ustawień w **Przeglądzie portów**.



## Łączenie się przez RCON

Do połączenia z serwerem Factorio przez RCON używa się narzędzia wiersza poleceń **rcon-cli**. Można je pobrać z oficjalnego [repozytorium GitHub](https://github.com/gorcon/rcon-cli). Po pobraniu i zainstalowaniu narzędzia na komputerze, połączenie nawiązuje się za pomocą adresu IP serwera, portu RCON oraz hasła RCON.

Przypisany port znajdziesz w **Przeglądzie portów** na dole strony ustawień w panelu administracyjnym serwera gier. Hasło i port muszą odpowiadać wartościom skonfigurowanym w panelu lub pliku konfiguracyjnym. Użyj poniższego polecenia, aby połączyć się i od razu wykonać komendę:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## Komendy RCON

Po połączeniu przez RCON można wykonywać różne polecenia administracyjne i diagnostyczne na serwerze Factorio. Dostępne komendy zależą od silnika gry, ale zazwyczaj obejmują działania związane z zarządzaniem graczami, zapytaniami o status i kontrolą serwera.

| Komenda                         | Opis                                                   |
|--------------------------------|--------------------------------------------------------|
| `/help`                        | Wyświetla wszystkie dostępne komendy                   |
| `/players`                     | Wyświetla listę wszystkich podłączonych graczy        |
| `/kick <player>`               | Wyrzuca gracza z serwera                                |
| `/ban <player>`                | Blokuje gracza na stałe                                 |
| `/unban <player>`              | Odblokowuje wcześniej zbanowanego gracza               |
| `/admins`                      | Pokazuje listę administratorów serwera                  |
| `/promote <player>`            | Nadaje graczowi prawa administratora                    |
| `/demote <player>`             | Odbiera graczowi prawa administratora                   |
| `/save`                        | Zapisuje aktualny stan świata                            |
| `/server-save`                 | Wymusza ręczne zapisanie serwera                         |



## Podsumowanie

RCON to podstawowe narzędzie do zdalnej administracji serwerami gier Factorio. Umożliwia szybki i bezpośredni dostęp do funkcji administracyjnych, oferując jednocześnie kontrolę dostępu przez uwierzytelnianie hasłem. Prawidłowa i bezpieczna konfiguracja jest kluczowa, aby zapewnić stabilność serwera i ochronę przed nieautoryzowanym dostępem.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest do Twojej dyspozycji codziennie! 🙂

<InlineVoucher />