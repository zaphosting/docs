---
id: minecraft-rcon
title: "Minecraft: RCON"
description: "Dowiedz się, jak zdalnie zarządzać serwerami Minecraft za pomocą RCON, zapewniając elastyczną, bezpieczną kontrolę i efektywną administrację serwerem → Sprawdź teraz"
sidebar_label: RCON
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

RCON (Remote Console) to protokół sieciowy służący do zdalnego zarządzania serwerami gier. Umożliwia dostęp do konsoli serwera bez bezpośredniej interakcji ze środowiskiem serwera. Dzięki temu można wykonywać polecenia administracyjne, zmieniać parametry konfiguracji lub pobierać informacje o stanie serwera.

W Minecraft RCON służy do wykonywania poleceń po stronie serwera, takich jak zarządzanie graczami, zmiana ustawień rozgrywki czy dostęp do danych diagnostycznych. Połączenie jest chronione hasłem i działa przez określony port, dostępny za pomocą kompatybilnych klientów RCON.

Kluczową zaletą RCON jest to, że pozwala na zarządzanie serwerem **bez konieczności bycia zalogowanym w grze jako gracz**. Administratorzy serwera mogą monitorować i kontrolować Minecrafta z zewnętrznych narzędzi, interfejsów wiersza poleceń lub paneli głównych, co daje elastyczność i wygodę zdalnej obsługi.

<InlineVoucher />

## Konfiguracja

Zanim RCON będzie można używać, musi zostać włączony i skonfigurowany. Można to zrobić bezpośrednio w panelu administracyjnym serwera gier. W sekcji **Ustawienia** znajduje się opcja **RCON**, którą trzeba aktywować. Należy ustawić bezpieczne hasło oraz określić ważny port. Robi się to poprzez edycję pliku konfiguracyjnego dostępnego w zakładce **Konfiguracje** w panelu zarządzania serwerem. W pliku o nazwie `server.properties` należy dodać lub zmodyfikować następujące wpisy:

```cfg
enable-rcon=true
rcon.port=<XXXXX>
rcon.password=<wpisz-swoje-hasło>
```
Przypisany port RCON znajdziesz na dole strony ustawień w przeglądzie portów, gdzie musi być on podany.



## Łączenie się przez RCON

Do połączenia się z serwerem Minecraft przez RCON używa się narzędzia wiersza poleceń **rcon-cli**. Można je pobrać z oficjalnego [repozytorium GitHub](https://github.com/gorcon/rcon-cli). Po pobraniu i zainstalowaniu narzędzia na komputerze, połączenie można nawiązać, używając adresu IP serwera, portu RCON oraz hasła RCON.

Przypisany port znajdziesz w **przeglądzie portów** na dole strony ustawień w panelu serwera gier. Hasło i port muszą odpowiadać wartościom skonfigurowanym w panelu lub pliku konfiguracyjnym. Użyj poniższego polecenia, aby połączyć się i bezpośrednio wykonać polecenie:

```bash
rcon-cli -a <IP>:<PORT> -p <HASŁO> polecenie
```



## Polecenia RCON

Po połączeniu przez RCON można wykonywać różne polecenia administracyjne i diagnostyczne na serwerze Minecraft. Dostępne polecenia zależą od silnika gry, ale zazwyczaj obejmują zarządzanie graczami, zapytania o status oraz kontrolę serwera.

| Polecenie               | Opis                                      |
|------------------------|-------------------------------------------|
| `list`                 | Wyświetla listę podłączonych graczy       |
| `say <wiadomość>`      | Wysyła wiadomość do wszystkich graczy     |
| `kick <gracz>`         | Wyrzuca gracza z serwera                   |
| `ban <gracz>`          | Banuje gracza                              |
| `pardon <gracz>`       | Odbanowuje gracza                          |
| `op <gracz>`           | Nadaje graczowi uprawnienia operatora     |
| `deop <gracz>`         | Odbiera uprawnienia operatora              |
| `time set <wartość>`   | Ustawia czas w świecie (np. dzień, noc, liczba) |
| `gamemode <tryb> <gracz>` | Ustawia tryb gry gracza                 |
| `weather <clear/rain/thunder>` | Zmienia pogodę                     |
| `stop`                 | Bezpiecznie zatrzymuje serwer              |



## Podsumowanie

RCON to podstawowe narzędzie do zdalnej administracji serwerami gier Minecraft. Umożliwia szybki i bezpośredni dostęp do funkcji administracyjnych, jednocześnie zapewniając kontrolę dostępu przez uwierzytelnianie hasłem. Prawidłowa i bezpieczna konfiguracja jest kluczowa, aby zapewnić stabilność serwera i ochronę przed nieautoryzowanym dostępem.

W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />