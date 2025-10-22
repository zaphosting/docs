---
id: abioticfactor-server-savegames
title: "Abiotic Factor: Zarządzanie zapisami gry Abiotic Factor"
description: "Dowiedz się, jak zarządzać i tworzyć kopie zapasowe zapisów gry Abiotic Factor lokalnie i na serwerze, aby zapewnić bezpieczną rozgrywkę → Sprawdź teraz"
sidebar_label: Zarządzanie zapisami
services:
  - gameserver-abioticfactor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

W tym poradniku pokażemy, jak zarządzać zapisami gry Abiotic Factor na Twoim serwerze gier, w tym jak tworzyć kopie zapasowe lokalnych i serwerowych zapisów oraz jak je przesyłać na serwer.

<InlineVoucher />

## Przygotowanie

Aby uzyskać dostęp do plików serwera, potrzebujesz klienta FTP, takiego jak [WinSCP](https://winscp.net/eng/index.php) lub [FileZilla](https://filezilla-project.org/), które są open-source i darmowe do pobrania.

Musisz połączyć się z serwerem przez klienta FTP, używając danych logowania, które znajdziesz w **Narzędzia->Przeglądarka FTP** w panelu administracyjnym Twojego serwera gier. Skorzystaj z naszego [dostępu przez FTP](gameserver-ftpaccess.md), jeśli potrzebujesz dodatkowej pomocy przy połączeniu.

## Tworzenie kopii zapasowej zapisu gry

### Lokalny zapis gry

Lokalne zapisy gry to te, które stworzyłeś, hostując grę multiplayer lokalnie na swoim urządzeniu. Znajdziesz je w lokalnym folderze AppData Windows, dokładnie pod ścieżką:
```
../AppData/Local/AbioticFactor/Saved/SaveGames/[twoje_steamid]/Worlds
```

:::tip
Możesz szybko dostać się do tego folderu, naciskając jednocześnie `CTRL` + `R` i wpisując w oknie uruchamiania następującą ścieżkę: `%userprofile%/AppData/Local/AbioticFactor/Saved/SaveGames`. Po prostu kliknij **OK**, a zostaniesz przeniesiony do folderu.

![](https://screensaver01.zap-hosting.com/index.php/s/zd7Zy5C6EH7BMHa/preview)
:::

Pamiętaj, aby przejść do folderu z Twoim Steam ID, a następnie do folderu `Worlds`. Tam znajdziesz wszystkie swoje lokalne zapisy gry.

### Dostęp do zapisu gry przez FTP

Tworzenie kopii zapasowej zapisu gry z serwera jest proste. Po połączeniu się z serwerem gier przez klienta FTP, przejdź do następującej ścieżki:
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds
```

W tym miejscu znajdziesz swoje zapisy gry. Kliknij prawym przyciskiem na folder i wybierz **Pobierz**, aby zapisać go lokalnie na swoim urządzeniu.

![](https://screensaver01.zap-hosting.com/index.php/s/RJSeBFpCdGamK7s/preview)

### Automatyczna kopia zapasowa

Oferujemy też opcję automatycznego tworzenia kopii zapasowych zapisu gry (i pliku konfiguracyjnego) bezpośrednio przez nasz panel administracyjny. Wystarczy, że wejdziesz do **Narzędzia->Kopie zapasowe** w panelu Twojego serwera gier. Tam możesz ustawić różne opcje harmonogramu automatycznych kopii zapasowych. Udostępniamy 10 GB darmowego miejsca na kopie zapasowe, gdzie będą przechowywane Twoje backupy. Więcej informacji o kopiach zapasowych znajdziesz w naszym dedykowanym [poradniku o kopiach zapasowych](gameserver-backups.md).

## Wgrywanie zapisu gry

Podobnie jak przy tworzeniu kopii, wgrywanie zapisu gry jest proste. Najpierw połącz się z serwerem gier przez klienta FTP. Następnie przejdź do ścieżki:
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds/world
```

:::note
Obecnie serwery dedykowane Abiotic Factor nie obsługują przełączania między zapisami gry, dlatego musisz wgrać zawartość swojego folderu zapisu bezpośrednio do głównego folderu `world`.
:::

Otwórz folder zapisu gry, który chcesz wgrać. Po prostu przeciągnij i upuść wszystkie pliki i foldery z tego folderu do głównego folderu `world` na serwerze. To wgra Twój zapis gry na serwer.

![](https://screensaver01.zap-hosting.com/index.php/s/wsT4MXpp2MFWLtQ/preview)

:::info
Jeśli główny folder zapisu `world` nie istnieje, spróbuj wyłączyć i ponownie uruchomić serwer. Jeśli to nie pomoże, użyj przycisku **Weryfikuj pliki Steam** na głównym panelu serwera, aby przywrócić domyślne pliki.
:::

## Aktywacja zapisu gry

W przeciwieństwie do standardowej potrzeby edycji pliku konfiguracyjnego, aby aktywować zapis gry, tutaj nie musisz tego robić, ponieważ serwery dedykowane Abiotic Factor nie obsługują jeszcze przełączania zapisów.

Po prostu zrestartuj serwer, a przy następnym uruchomieniu serwer załaduje zawartość zapisu gry, który wgrałeś do głównego folderu `world`.

<InlineVoucher />