---
id: hytale-commands
title: "Hytale: Lista Komend"
description: "Przegląd dostępnych komend konsolowych i w grze dla serwerów Hytale → Sprawdź teraz"
sidebar_label: Lista Komend
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Serwery Hytale oferują szeroki wachlarz komend, które pozwalają administratorom zarządzać rozgrywką, graczami, światami oraz konfiguracją serwera. Komendy te można wykonywać zarówno przez konsolę serwera na żywo, jak i bezpośrednio w grze, pod warunkiem posiadania odpowiednich uprawnień.

![](https://screensaver01.zap-hosting.com/index.php/s/2yJ6G3AWCDfAHMj/download)

Ta strona zawiera przegląd najczęściej używanych i oficjalnie udokumentowanych komend serwera Hytale.

<InlineVoucher />



## Autoryzacja

Komendy autoryzacyjne są potrzebne, aby upoważnić serwer do akceptowania połączeń graczy oraz interakcji z usługami online Hytale.

| Komenda               | Opis                                                  |
| --------------------- | ----------------------------------------------------- |
| `/auth login device`  | Uruchamia autoryzację opartą na urządzeniu. Serwer wyświetla URL i kod urządzenia, które trzeba potwierdzić przez konto Hytale. |
| `/auth login browser` | Uruchamia autoryzację przez przeglądarkę. Wymaga środowiska graficznego na serwerze. |
| `/auth status`        | Pokazuje aktualny status autoryzacji serwera.          |
| `/auth logout`        | Wylogowuje serwer i usuwa aktywną sesję autoryzacji.  |



## Gracze i Uprawnienia

Te komendy kontrolują dostęp administracyjny oraz precyzyjne przypisywanie uprawnień dla użytkowników i grup.

| Komenda                                   | Opis                                                      |
| ----- | - |
| `/op add <PlayerName>`                    | Nadaje graczowi uprawnienia operatora.                    |
| `/op remove <PlayerName>`                 | Odbiera graczowi uprawnienia operatora.                   |
| `/perm user list <uuid>`                  | Wyświetla wszystkie uprawnienia przypisane bezpośrednio użytkownikowi. |
| `/perm user add <uuid> <permission>`      | Przypisuje jedno lub więcej uprawnień bezpośrednio użytkownikowi. |
| `/perm user remove <uuid> <permission>`   | Usuwa konkretne uprawnienia od użytkownika.               |
| `/perm user group list <uuid>`            | Pokazuje wszystkie grupy uprawnień, do których należy użytkownik. |
| `/perm user group add <uuid> <group>`     | Dodaje użytkownika do wskazanej grupy uprawnień.          |
| `/perm user group remove <uuid> <group>`  | Usuwa użytkownika z wskazanej grupy uprawnień.             |
| `/perm group list <group>`                | Wyświetla wszystkie uprawnienia przypisane grupie.        |
| `/perm group add <group> <permission>`    | Dodaje uprawnienia do grupy.                               |
| `/perm group remove <group> <permission>` | Usuwa uprawnienia z grupy.                                 |



## Biała lista

Komendy białej listy ograniczają dostęp do serwera tylko dla zatwierdzonych graczy.

| Komenda                          | Opis                                              |
| -------------------------------- | ------------------------------------------------- |
| `/whitelist add <playername>`    | Dodaje wskazanego gracza do białej listy.         |
| `/whitelist remove <playername>` | Usuwa wskazanego gracza z białej listy.           |
| `/whitelist list`                | Wyświetla wszystkich aktualnie na białej liście.  |
| `/whitelist enable`              | Włącza wymuszanie białej listy.                    |
| `/whitelist disable`             | Wyłącza białą listę.                               |
| `/whitelist status`              | Pokazuje aktualny status białej listy.             |



## Zarządzanie światami

Komendy świata kontrolują tworzenie, ładowanie, rozładowywanie i usuwanie światów.

| Komenda                    | Opis                                                  |
| -- | -- |
| `/world create <name>`     | Tworzy nowy świat o podanej nazwie.                   |
| `/world load <name>`       | Ładuje istniejący świat i aktywuje go.                |
| `/world unload <name>`     | Rozładowuje świat bez usuwania jego danych.           |
| `/world remove <name>`     | Usuwa świat wraz ze wszystkimi powiązanymi danymi.    |
| `/world setdefault <name>` | Ustawia domyślny świat, który ładuje się przy starcie serwera. |



## Rozgrywka i środowisko

Te komendy bezpośrednio wpływają na zasady rozgrywki i zachowanie świata.

| Komenda                    | Opis                                                  |
| -------------------------- | ----------------------------------------------------- |
| `/list`                    | Wyświetla wszystkich aktualnie połączonych graczy.    |
| `/tp <player> <target>`    | Teleportuje jednego gracza do innego gracza.          |
| `/tp <player> <x> <y> <z>` | Teleportuje gracza do konkretnych współrzędnych.      |



## Teleportacja i pozycjonowanie

Komendy służące do zarządzania pozycjami graczy i ich widocznością.

| Komenda                    | Opis                                                  |
| -- | - |
| `/list`                    | Wyświetla wszystkich aktualnie połączonych graczy.    |
| `/tp <player> <target>`    | Teleportuje jednego gracza do innego gracza.          |
| `/tp <player> <x> <y> <z>` | Teleportuje gracza do konkretnych współrzędnych.      |



## Narzędzia i pomoc

Komendy narzędziowe dostarczają pomocy i informacji o serwerze.

| Komenda           | Opis                                                  |
| ----- | ---- |
| `/help`           | Wyświetla listę dostępnych komend.                    |
| `/help <command>` | Pokazuje szczegółową pomoc dla konkretnej komendy.    |
| `/status`         | Pokazuje aktualny status serwera i informacje o działaniu. |



## Podsumowanie

System komend Hytale daje potężne narzędzia do zarządzania serwerami, graczami i zachowaniem rozgrywki. Dzięki znajomości i wykorzystaniu dostępnych komend, administratorzy mogą efektywnie obsługiwać i dostosowywać swoje środowisko serwera Hytale.

W razie dodatkowych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂



<InlineVoucher />