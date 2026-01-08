---
id: dst-whitelist
title: "Don't Starve Together: Whitelist"
description: "Informacje o tym, jak dodać serwer Don't Starve Together do whitelisty na ZAP-Hosting → Dowiedz się więcej"
sidebar_label: Whitelist
services:
  - gameserver-dst
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Whitelist to lista dostępu, która ogranicza, kto może dołączyć do Twojego serwera. W Don't Starve Together jest to zaimplementowane jako allowlista oparta na ID użytkowników Klei. Standardowa konfiguracja to plik `whitelist.txt` oraz `whitelist_slots` w `cluster.ini`.

<InlineVoucher />


## Aktywacja Whitelisty

Połącz się z serwerem przez FTP i znajdź folder klastra, zwykle podobny do `DoNotStarveTogether/Cluster_1/` lub ścieżkę specyficzną dla dostawcy, która zawiera `cluster.ini`. Otwórz `cluster.ini` i w sekcji `[NETWORK]` ustaw `whitelist_slots`.

Aby serwer działał wyłącznie na whitelist, ustaw `whitelist_slots` na wartość `max_players`.

```ini
[NETWORK]
max_players = 6
whitelist_slots = 6
```

W tym samym katalogu klastra utwórz lub edytuj plik `whitelist.txt`. Dodaj jedno ID Klei na linię w formacie KU_.

```txt
KU_aaaaaaaa
KU_bbbbbbbb
```

Zapisz pliki i zrestartuj serwer. Allowlista jest wczytywana podczas startu.

## Zarządzanie Graczami na Whitelist

Aby dodać gracza, dopisz jego ID KU_ do `whitelist.txt`, zapisz i zrestartuj serwer.

Aby usunąć gracza, usuń jego ID KU_ z `whitelist.txt`, zapisz i zrestartuj serwer.

Utrzymuj liczbę ID w `whitelist.txt` co najmniej równą `whitelist_slots`, aby uniknąć problemów z dołączaniem, gdy zarezerwowane sloty allowlisty przekraczają liczbę użytkowników na liście.

## Sprawdzanie Działania Whitelisty

Po restarcie spróbuj dołączyć kontem, które nie jest na liście `whitelist.txt`. Jeśli `whitelist_slots` jest równe `max_players`, dołączenie powinno się nie powieść. Następnie dołącz z ID KU_ znajdującym się na liście, aby potwierdzić dostęp.

Jeśli serwer nadal pozwala na dołączenie nieznajdującym się na liście, upewnij się, że edytowałeś aktywny folder klastra i że w sekcji `[NETWORK]` znajduje się linia `whitelist_slots`.

## Podsumowanie

Jeśli wszystkie powyższe kroki zostały wykonane poprawnie, whitelist jest aktywna i możesz kontrolować, kto dokładnie może dołączyć do serwera. Jeśli dostęp nadal nie działa zgodnie z oczekiwaniami, zrestartuj serwer jeszcze raz i sprawdź pliki lub wyjście poleceń, aby potwierdzić, że zmiana została zastosowana.

<InlineVoucher />