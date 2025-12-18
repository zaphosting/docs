---
id: scum-becomeadmin
title: "SCUM: Zostań administratorem"
description: "Dowiedz się, jak zarządzać swoim serwerem gier z pełną kontrolą administratora i korzystać z potężnych komend, aby ulepszyć rozgrywkę → Sprawdź teraz"
sidebar_label: Zostań administratorem
services:
  - gameserver-scum
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Wprowadzenie
Przydzielenie uprawnień administratora pozwala na prostą i kompleksową administrację z pełną kontrolą nad Twoim serwerem. Jako administrator masz możliwość korzystania ze wszystkich dostępnych opcji i funkcji oferowanych przez grę bezpośrednio w trakcie rozgrywki. Wszystkie kroki, które musisz wykonać, aby przydzielić uprawnienia administratora na swoim serwerze, opisane są poniżej.

<InlineVoucher />



## Konfiguracja

Konfigurację uprawnień administratora możesz wykonać przez stronę **ustawień swojego serwera gier**. Aby to zrobić, otwórz ustawienia i przejdź do opcji **Lista administratorów**. Wpisz tam swój **SteamID64**, aby przypisać sobie rolę admina. Jeśli chcesz dodać więcej graczy jako administratorów, oddziel każdy SteamID przecinkiem.

![img](https://screensaver01.zap-hosting.com/index.php/s/AiMDoy5mdEHjnj3/download)



## Komendy administratora

Poniżej znajdziesz listę popularnych komend administratora, których możesz używać jako admin na swoim serwerze.

| Komenda           | Opis                                                        | Przykład                     |
| ----------------- | ------------------------------------------------------------ | ----------------------------- |
| #LIST             | Wyświetla pełną listę komend administracyjnych SCUM.         | #list                         |
| #LISTPLAYERS      | Pokazuje listę wszystkich graczy aktualnie na serwerze.      | #listplayers                  |
| #KICK             | Wyrzuca konkretnego gracza z serwera.                        | #kick playername              |
| #BAN              | Trwale blokuje konkretnego gracza na serwerze.               | #ban playername               |
| #LOCATION         | Pokazuje dokładną lokalizację wskazanego gracza.             | #location playername          |
| #LISTASSETS       | Wyświetla listę wszystkich zasobów w grze, opcjonalnie filtrowaną po słowie kluczowym. | #listassets wood              |
| #SPAWNITEM        | Tworzy wskazany przedmiot przed graczem.                     | #spawnitem cal_9mm            |
| #SPAWNCHARACTER   | Tworzy wskazanego NPC, zwierzę lub lalkę przed graczem.      | #spawncharacter bp_cow2       |
| #TELEPORT         | Teleportuje Cię do wskazanych współrzędnych.                 | #teleport 143,1222,1333       |
| #TELEPORTTOPLAYER | Teleportuje Cię do wskazanego gracza.                        | #teleport playername          |
| #SETFAMEPOINTS    | Ustawia punkty sławy dla konkretnego gracza.                 | #setfamepoints 400 playername |





## Podsumowanie

Gratulacje! Jeśli wykonałeś wszystkie kroki, powinieneś mieć poprawnie skonfigurowane uprawnienia administratora na swoim serwerze. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂

<InlineVoucher />