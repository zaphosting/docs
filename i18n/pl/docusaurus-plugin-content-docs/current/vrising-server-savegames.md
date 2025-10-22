---
id: vrising-server-savegames
title: "V Rising: Zarządzanie zapisami gry V Rising"
description: "Dowiedz się, jak zarządzać i tworzyć kopie zapasowe zapisów gry V Rising, aby bezpiecznie grać w multiplayer → Sprawdź teraz"
sidebar_label: Zarządzanie zapisami
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

W tym poradniku pokażemy, jak zarządzać zapisami gry V Rising na Twoim serwerze gier, w tym jak tworzyć kopie zapasowe lokalnych i serwerowych zapisów oraz jak je przesyłać na serwer.

<InlineVoucher />

## Przygotowanie

Aby uzyskać dostęp do plików serwera, potrzebujesz klienta FTP, takiego jak [WinSCP](https://winscp.net/eng/index.php) lub [FileZilla](https://filezilla-project.org/), które są open-source i darmowe do pobrania.

Musisz połączyć się z serwerem przez klienta FTP, używając danych logowania, które znajdziesz w **Narzędzia->FTP-Browser** w panelu administracyjnym Twojego serwera gier. Skorzystaj z naszego [poradnika Dostęp przez FTP](gameserver-ftpaccess.md), jeśli potrzebujesz pomocy przy połączeniu.

## Tworzenie kopii zapasowej zapisu gry

### Lokalny zapis gry

Lokalne zapisy to te, które stworzyłeś, hostując grę multiplayer lokalnie na swoim urządzeniu. Znajdziesz je w folderze Windows LocalLow AppData, dokładnie pod ścieżką:
```
../AppData/LocalLow/Stunlock Studios/VRising
```

:::tip
Możesz szybko dostać się do tego folderu, naciskając jednocześnie `CTRL` + `R` i wpisując w oknie uruchamiania następującą ścieżkę: `%userprofile%/appdata/locallow/Stunlock Studios/VRising`. Po prostu kliknij **OK**, a zostaniesz przeniesiony do folderu.

![](https://screensaver01.zap-hosting.com/index.php/s/dz4ytiTai5jD2ep/preview)
:::

W tym miejscu zobaczysz foldery `Saves` i/lub `CloudSaves`, w zależności od tego, czy korzystałeś z funkcji Steam Cloud Saving oraz od typu serwera. Wchodząc do tych folderów, znajdziesz swoje lokalne zapisy gry.

:::note
W zależności od wersji gry, zapisy będą znajdować się w folderze v1 lub v3.
:::

### Dostęp do zapisu gry przez FTP

Tworzenie kopii zapasowej zapisu z serwera jest proste. Po połączeniu się z serwerem gier przez klienta FTP, przejdź do ścieżki:
```
../vrising/save-data/Saves
```

W tym miejscu powinieneś zobaczyć foldery v1 i v3, w zależności od wersji gry. W każdym z nich znajdziesz swoje zapisy. Kliknij prawym przyciskiem na folder i wybierz **Pobierz**, aby zapisać go lokalnie na swoim urządzeniu.

![](https://screensaver01.zap-hosting.com/index.php/s/tZ4HngqLeHTkizz/preview)

### Automatyczna kopia zapasowa

Oferujemy też opcję automatycznego tworzenia kopii zapasowych zapisu gry (i pliku konfiguracyjnego) bezpośrednio przez panel administracyjny. Wystarczy, że wejdziesz do **Narzędzia->Kopie zapasowe** w panelu swojego serwera gier. Tam możesz ustawić harmonogram automatycznych backupów. Do dyspozycji masz 10 GB darmowej przestrzeni na kopie zapasowe. Więcej informacji o backupach znajdziesz w naszym dedykowanym [poradniku Kopie zapasowe](gameserver-backups.md).

## Wgrywanie zapisu gry

Podobnie jak przy tworzeniu kopii zapasowej, wgrywanie zapisu jest proste. Najpierw połącz się z serwerem gier przez klienta FTP. Następnie przejdź do ścieżki:
```
../vrising/save-data/Saves
```

![](https://screensaver01.zap-hosting.com/index.php/s/RXd4aoxrA6QnP46/preview)

W zależności od wersji zapisu, przeciągnij i upuść swoje zapisy do odpowiedniego folderu przez klienta FTP, a zostaną przesłane na serwer.

:::tip
Warto skopiować nazwę folderu z zapisem, który wgrałeś, bo będzie Ci potrzebna do aktywacji w kolejnym kroku.
:::

## Aktywacja zapisu gry

Aby użyć konkretnego zapisu, musisz edytować plik konfiguracyjny. Jest kilka sposobów, my pokażemy ten przez panel administracyjny, bo jest najprostszy. Jeśli chcesz poznać inne metody, sprawdź nasz [poradnik Konfiguracja serwera](vrising-configuration.md).

Wejdź do sekcji **Ustawienia** w panelu swojego serwera gier i znajdź opcję **Savename**.

Zmień tę wartość na nazwę folderu zapisu, który wgrałeś w poprzednim kroku. Na koniec zapisz zmiany zielonym przyciskiem **Zapisz** na dole i zrestartuj serwer.

<InlineVoucher />