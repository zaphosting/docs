---
id: satisfactory-savegame
title: "Satisfactory: Zarządzanie zapisami gry"
description: "Dowiedz się, jak zarządzać i tworzyć kopie zapasowe zapisów gry Satisfactory lokalnie oraz na serwerze, aby gra była bezpieczna → Sprawdź teraz"
sidebar_label: Zarządzanie zapisami gry
services:
  - gameserver-satisfactory
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

W tym poradniku pokażemy, jak zarządzać zapisami gry Satisfactory na Twoim serwerze gier, w tym jak tworzyć kopie zapasowe lokalnych i serwerowych zapisów oraz jak je przesyłać na serwer.

<InlineVoucher />

## Przygotowanie

Aby uzyskać dostęp do plików serwera, potrzebujesz klienta FTP, takiego jak [WinSCP](https://winscp.net/eng/index.php) lub [FileZilla](https://filezilla-project.org/), które są open-source i darmowe do pobrania.

Musisz połączyć się z serwerem przez klienta FTP, używając danych logowania dostępnych w **Narzędzia->FTP-Browser** w panelu administracyjnym Twojego serwera gier. Skorzystaj z naszego [poradnika Dostęp przez FTP](gameserver-ftpaccess.md), jeśli potrzebujesz pomocy przy połączeniu.

## Kopia zapasowa zapisu gry

### Lokalny zapis gry

Lokalne zapisy to te, które stworzyłeś grając w trybie single player lub hostując grę multiplayer lokalnie na swoim urządzeniu. Znajdziesz je w folderze Windows AppData, dokładnie pod ścieżką:
```
../AppData/Local/FactoryGame/Saved/SaveGames
```

:::tip
Możesz szybko dostać się do tego folderu, naciskając jednocześnie `CTRL` + `R` i wpisując w oknie uruchamiania następującą ścieżkę: `%localappdata%/FactoryGame/Saved/SaveGames`. Kliknij **OK**, a zostaniesz przeniesiony do folderu.

![](https://screensaver01.zap-hosting.com/index.php/s/pbXDwJWfEPtbAY3/preview)
:::

W tym miejscu zobaczysz foldery zawierające Twoje lokalne zapisy gry w jednym miejscu.

![](https://screensaver01.zap-hosting.com/index.php/s/knB2RkXYGNR7J5M/preview)

### Dostęp do zapisu gry przez FTP

Tworzenie kopii zapasowej zapisu gry z serwera jest proste. Po połączeniu się z serwerem gier przez klienta FTP, przejdź do ścieżki:
```
../satisfactory/save-backups
```

W tym miejscu powinieneś zobaczyć folder z losowymi znakami, który jest Twoim zapisem gry. Kliknij na niego prawym przyciskiem i wybierz **Pobierz**, aby zapisać go lokalnie na swoim urządzeniu.

![](https://screensaver01.zap-hosting.com/index.php/s/feHc74QHrzPwo24/preview)

### Automatyczna kopia zapasowa

Oferujemy też opcję automatycznego tworzenia kopii zapasowych zapisu gry (oraz pliku konfiguracyjnego) bezpośrednio przez panel administracyjny. Wystarczy, że wejdziesz do **Narzędzia->Kopie zapasowe** w panelu serwera gier. Tam możesz ustawić różne opcje harmonogramu automatycznych backupów. Dajemy Ci 10 GB darmowej przestrzeni na kopie zapasowe, gdzie będą one przechowywane. Więcej informacji o backupach znajdziesz w naszym dedykowanym [poradniku Kopie zapasowe](gameserver-backups.md).

## Wgrywanie zapisu gry

Podobnie jak przy tworzeniu kopii, wgrywanie zapisu gry jest proste. Najpierw połącz się z serwerem gier przez klienta FTP. Następnie przejdź do ścieżki:
```
../satisfactory/save-backups
```

![](https://screensaver01.zap-hosting.com/index.php/s/8WsKYjYzNk54A65/preview)

Po prostu przeciągnij i upuść swój zapis gry do tego folderu przez klienta FTP, a zostanie on przesłany na serwer.

:::tip
Warto skopiować nazwę folderu zapisu gry, który przesłałeś, ponieważ będzie Ci potrzebna, jeśli chcesz go aktywować w kolejnym kroku.
:::

## Aktywacja zapisu gry

Korzystanie z zapisu gry jest bardzo proste. Możesz to zrobić przez wbudowany w grę Satisfactory Server Manager lub przejść do panelu głównego serwera i skorzystać z sekcji **Menedżer zapisów gry**.

## Podsumowanie

Pomyślnie dodałeś zapis gry do swojego serwera gier. Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />