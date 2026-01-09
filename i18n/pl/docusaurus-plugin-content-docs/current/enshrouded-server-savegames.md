---
id: enshrouded-server-savegames
title: "Enshrouded: Zarządzanie zapisami gry Enshrouded"
description: "Dowiedz się, jak zarządzać i tworzyć kopie zapasowe zapisów gry Enshrouded, aby bezpiecznie grać w multiplayer → Sprawdź teraz"
sidebar_label: Zarządzanie zapisami
services:
  - gameserver-enshrouded
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

W tym poradniku pokażemy, jak zarządzać zapisami gry Enshrouded na Twoim serwerze gier, w tym jak tworzyć kopie zapasowe lokalnych i serwerowych zapisów oraz jak je przesłać na serwer.

<InlineVoucher />

## Przygotowanie

Aby uzyskać dostęp do plików serwera, potrzebujesz klienta FTP, takiego jak [WinSCP](https://winscp.net/eng/index.php) lub [FileZilla](https://filezilla-project.org/), które są open-source i dostępne za darmo.

Musisz połączyć się z serwerem przez klienta FTP, używając danych logowania, które znajdziesz w **Narzędzia->Przeglądarka FTP** w panelu administracyjnym Twojego serwera gier. Skorzystaj z naszego [poradnika Dostęp przez FTP](gameserver-ftpaccess.md), jeśli potrzebujesz pomocy przy połączeniu.

## Kopia zapasowa zapisu gry

### Lokalny zapis gry

Lokalne zapisy to te, które stworzyłeś, hostując grę multiplayer lokalnie na swoim urządzeniu. Domyślnie Enshrouded korzysta ze Steam Cloud, aby automatycznie tworzyć kopie zapasowe zapisów. Aby uzyskać do nich dostęp, musisz wejść do folderu userdata Steam, gdzie przechowywane są dane gry. Ścieżka wygląda tak:
```
../Steam/userdata/[twoje_steamid]/1203620/remote
```

:::tip
W standardowej instalacji folder Steam znajduje się na dysku systemowym, pod ścieżką: `C://Program Files x86/Steam`. Pamiętaj, że jeśli zainstalowałeś Steam gdzie indziej, ścieżka może się różnić.
:::

Po dotarciu do tego folderu zobaczysz plik postaci oraz wszystkie lokalne zapisy gry w jednym miejscu.

![](https://screensaver01.zap-hosting.com/index.php/s/dyydLNzQt7ZWRPx/preview)

:::note
Jeśli **nie** korzystasz ze Steam Cloud do zapisu, folder z zapisami znajdziesz pod ścieżką: `C://Users/[twoj_uzytkownik]/Saved Games/Enshrouded`.
:::

### Dostęp do zapisu gry przez FTP

Tworzenie kopii zapasowej zapisu z serwera jest proste. Po połączeniu się z serwerem gier przez klienta FTP, przejdź do ścieżki:
```
../enshrouded/savegame/
```

W tym miejscu powinieneś zobaczyć plik z losowymi znakami, który jest Twoim zapisem gry. Kliknij na niego prawym przyciskiem i wybierz **Pobierz**, aby zapisać go lokalnie na swoim urządzeniu.

![](https://screensaver01.zap-hosting.com/index.php/s/wTcodeKXYq3RBfY/preview)

### Automatyczna kopia zapasowa

Oferujemy też opcję automatycznego tworzenia kopii zapasowych zapisu gry (oraz pliku konfiguracyjnego) bezpośrednio przez panel administracyjny. Wystarczy, że wejdziesz do **Narzędzia->Kopie zapasowe** w panelu swojego serwera gier. Tam możesz ustawić harmonogram automatycznych backupów. Do dyspozycji masz 10 GB darmowej przestrzeni na kopie zapasowe. Więcej informacji o backupach znajdziesz w naszym dedykowanym [poradniku Kopie zapasowe](gameserver-backups.md).

## Wgrywanie zapisu gry

Podobnie jak przy tworzeniu kopii, wgrywanie zapisu jest proste. Najpierw połącz się z serwerem gier przez klienta FTP. Następnie przejdź do ścieżki:
```
../enshrouded/savegame/
```

![](https://screensaver01.zap-hosting.com/index.php/s/gJW8wSapi4Bo2gw/preview)

Po prostu przeciągnij i upuść swój zapis gry do tego folderu przez klienta FTP, a zostanie on przesłany na serwer.

## Aktywacja zapisu gry

Korzystanie z zapisu jest bardzo proste. Połącz się z serwerem, a podczas ekranu ustawień gry będziesz mógł wybrać konkretny zapis, którego chcesz użyć. Pod każdym zapisem wyświetlona będzie nazwa, poziom i data ostatniej rozgrywki, co ułatwi Ci wybór.

Gratulacje! Pomyślnie dodałeś zapis gry do swojego serwera gier.

<InlineVoucher />