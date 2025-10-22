---
id: moe-server-savegames
title: "Myth of Empires: Zarządzanie Savegames"
description: "Dowiedz się, jak bezpiecznie zarządzać i tworzyć kopie zapasowe swoich zapisów gry Myth of Empires, aby zapewnić płynną kontynuację rozgrywki → Sprawdź teraz"
sidebar_label: Zarządzanie Savegames
services:
  - gameserver-moe
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

W tym poradniku poznasz, jak zarządzać swoimi zapisami gry Myth of Empires na serwerze gier, w tym jak tworzyć kopie zapasowe lokalnych i serwerowych zapisów oraz jak je przesyłać na serwer.

<InlineVoucher />

## Przygotowanie

Aby uzyskać dostęp do plików serwera, potrzebujesz klienta FTP, takiego jak [WinSCP](https://winscp.net/eng/index.php) lub [FileZilla](https://filezilla-project.org/), które są open-source i darmowe do pobrania.

Musisz połączyć się z serwerem przez klienta FTP, używając danych logowania dostępnych w **Narzędzia->Przeglądarka FTP** w panelu administracyjnym Twojego serwera gier. Skorzystaj z naszego [poradnika Dostęp przez FTP](gameserver-ftpaccess.md), jeśli potrzebujesz pomocy przy łączeniu się z serwerem.

## Kopia zapasowa Savegame

### Lokalny Savegame

Lokalne zapisy to te, które stworzyłeś, hostując grę multiplayer lokalnie na swoim urządzeniu. MOE przechowuje je w folderze w lokalizacji instalacji gry.

Otwórz Steam na swoim systemie, kliknij prawym przyciskiem na **Myth of Empires** i wybierz **Przeglądaj pliki lokalne** w sekcji **Zarządzaj**.

![](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

Przejdź do ścieżki:
```
../WindowsPrivateServer/MOE/Saved/SaveGames/
```

W tym folderze zobaczysz wszystkie swoje aktualne lokalne zapisy gry.

### Dostęp do Savegame przez FTP

Tworzenie kopii zapasowej zapisu z serwera jest proste. Po połączeniu się z serwerem gier przez klienta FTP, przejdź do ścieżki:
```
../moe-dedicated/MOE/Saved/SaveGames/
```

W tym miejscu powinieneś zobaczyć foldery z zapisami gry. Kliknij prawym przyciskiem na folder i wybierz **Pobierz**, aby zapisać go lokalnie na swoim urządzeniu.

![](https://screensaver01.zap-hosting.com/index.php/s/3yN723tY8eiBb2w/preview)

### Automatyczna kopia zapasowa

Oferujemy też opcję automatycznego tworzenia kopii zapasowej zapisu gry (oraz pliku konfiguracyjnego) bezpośrednio przez panel administracyjny. Wystarczy, że wejdziesz do **Narzędzia->Kopie zapasowe** w panelu swojego serwera gier. Tam możesz ustawić różne opcje harmonogramu automatycznych backupów. Udostępniamy 10 GB darmowej przestrzeni na kopie zapasowe. Więcej informacji o backupach znajdziesz w naszym dedykowanym [poradniku Kopie zapasowe](gameserver-backups.md).

## Wgrywanie Savegame

Podobnie jak przy tworzeniu kopii zapasowej, wgrywanie zapisu jest proste. Najpierw połącz się z serwerem gier przez klienta FTP. Następnie przejdź do ścieżki:
```
../moe-dedicated/MOE/Saved/SaveGames/
```

![](https://screensaver01.zap-hosting.com/index.php/s/KLD26KTYZYpfoqP/preview)

Po prostu przeciągnij i upuść swój zapis gry do tego folderu przez klienta FTP, a zostanie on przesłany na serwer.

## Aktywacja Savegame

Aby użyć swojego zapisu, musisz wybrać go w konfiguracji serwera. Najprościej zrobisz to w sekcji **Ustawienia** w panelu administracyjnym serwera gier. Więcej informacji znajdziesz w naszym [poradniku Konfiguracja serwera](moe-configuration.md).

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

W tej sekcji znajdź parametr **Nazwa mapy** w podstawowych ustawieniach — tam powinien pojawić się Twój przesłany świat. Jeśli go nie widzisz, upewnij się, że zrestartowałeś serwer po wgraniu zapisu.

Gratulacje! Pomyślnie dodałeś zapis gry do swojego serwera gier.

<InlineVoucher />