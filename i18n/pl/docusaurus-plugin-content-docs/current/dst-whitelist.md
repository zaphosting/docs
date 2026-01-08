---
id: dst-whitelist
title: "Don't Starve Together: Biała lista"
description: "Informacje o tym, jak dodać serwer Don't Starve Together do białej listy na ZAP-Hosting - Dokumentacja ZAP-Hosting.com"
sidebar_label: Biała lista
services:
  - gameserver-dst
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Biała lista to lista dostępu, która ogranicza, kto może dołączyć do Twojego serwera. W Don't Starve Together jest to realizowane jako lista dozwolonych użytkowników oparta na ID użytkowników Klei. Standardowa konfiguracja to plik `whitelist.txt` oraz `whitelist_slots` w `cluster.ini`.

<InlineVoucher />


## Aktywacja białej listy

Połącz się z serwerem przez FTP i znajdź folder klastra, zwykle podobny do `DoNotStarveTogether/Cluster_1/` lub ścieżkę specyficzną dla dostawcy, która zawiera `cluster.ini`. Otwórz `cluster.ini` i w sekcji `[NETWORK]` ustaw `whitelist_slots`.

Aby serwer działał wyłącznie na białej liście, ustaw `whitelist_slots` na wartość `max_players`.

```ini
[NETWORK]
max_players = 6
whitelist_slots = 6
```

W tym samym katalogu klastra utwórz lub edytuj plik `whitelist.txt`. Dodaj po jednym ID Klei w formacie KU_ w każdej linii.

```txt
KU_aaaaaaaa
KU_bbbbbbbb
```

Zapisz pliki i zrestartuj serwer. Lista dozwolonych użytkowników jest wczytywana podczas startu.

## Zarządzanie graczami na białej liście

Aby dodać gracza, dopisz jego ID KU_ do `whitelist.txt`, zapisz plik i zrestartuj serwer.

Aby usunąć gracza, usuń jego ID KU_ z `whitelist.txt`, zapisz i zrestartuj serwer.

Utrzymuj liczbę ID w `whitelist.txt` co najmniej równą wartości `whitelist_slots`, aby uniknąć problemów z dołączaniem, gdy zarezerwowane sloty na liście dozwolonych przekraczają liczbę wpisanych użytkowników.

## Sprawdzanie działania białej listy

Po restarcie spróbuj dołączyć kontem, które nie jest na liście `whitelist.txt`. Jeśli `whitelist_slots` jest równe `max_players`, dołączenie powinno się nie powieść. Następnie dołącz z kontem KU_ znajdującym się na liście, aby potwierdzić dostęp.

Jeśli serwer nadal pozwala na dołączanie użytkownikom spoza listy, upewnij się, że edytowałeś aktywny folder klastra i że w sekcji `[NETWORK]` znajduje się linia `whitelist_slots`.

## Podsumowanie

Jeśli wszystkie powyższe kroki zostały wykonane poprawnie, Twoja biała lista jest aktywna i możesz kontrolować, kto dokładnie może dołączyć do serwera. Jeśli dostęp nadal nie działa zgodnie z oczekiwaniami, zrestartuj serwer jeszcze raz i sprawdź pliki lub wyjście poleceń, aby potwierdzić, że zmiana została zastosowana.

<InlineVoucher />