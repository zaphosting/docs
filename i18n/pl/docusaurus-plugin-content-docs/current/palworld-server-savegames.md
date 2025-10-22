---
id: palworld-server-savegames
title: "Palworld: Zarządzanie Savegamami Palworld"
description: "Dowiedz się, jak bezpiecznie zarządzać i tworzyć kopie zapasowe swoich save'ów Palworld, aby zapewnić płynną kontynuację rozgrywki → Sprawdź teraz"
sidebar_label: Zarządzanie Savegamami
services:
  - gameserver-palworld
---

import InlineVoucher from '@site/src/components/InlineVoucher';

W tym poradniku pokażemy, jak zarządzać swoimi save'ami Palworld na serwerze gier, w tym jak tworzyć kopie zapasowe lokalnych i serwerowych save'ów oraz jak je przesyłać na serwer.

## Przygotowanie

Aby uzyskać dostęp do plików serwera, potrzebujesz klienta FTP, takiego jak [WinSCP](https://winscp.net/eng/index.php) lub [FileZilla](https://filezilla-project.org/), które są open-source i darmowe do pobrania.

Musisz połączyć się z serwerem przez klienta FTP, używając danych logowania, które znajdziesz w **Narzędzia->Przeglądarka FTP** w panelu administracyjnym swojego serwera gier. Skorzystaj z naszego [poradnika Dostęp przez FTP](gameserver-ftpaccess.md), jeśli potrzebujesz pomocy przy połączeniu z serwerem.

## Kopia zapasowa Savegame

### Lokalny Savegame

Lokalne save'y to te, które stworzyłeś, grając w trybie multiplayer na swoim urządzeniu. Znajdziesz je w folderze AppData Windows, dokładnie pod ścieżką:
```
../AppData/Local/Pal/Saved/SaveGames
```

:::tip
Możesz szybko przejść do tego folderu, naciskając jednocześnie `CTRL` + `R` i wpisując w oknie uruchamiania następującą ścieżkę: `%localappdata%/Pal/Saved/SaveGames/`. Kliknij **OK**, a zostaniesz przeniesiony do folderu.

![](https://github.com/zaphosting/docs/assets/42719082/5cdff375-57f8-4699-9985-42bcecf22218)
:::

W tym miejscu zobaczysz folder o nazwie odpowiadającej Twojemu SteamID. Otwórz go, aby zobaczyć wszystkie swoje lokalne save'y w jednym miejscu.

![](https://github.com/zaphosting/docs/assets/42719082/8f36715d-7e87-45e1-b859-6ebedd18c8da)

### Dostęp do Savegame przez FTP

Tworzenie kopii zapasowej save'a z serwera jest proste. Po połączeniu się z serwerem gier przez klienta FTP, przejdź do ścieżki:
```
../palworld/Pal/Saved/SaveGames/0
```

W tym miejscu powinieneś zobaczyć folder z losowymi znakami, który jest Twoim save'em. Kliknij na niego prawym przyciskiem myszy i wybierz **Pobierz**, aby zapisać go lokalnie na swoim urządzeniu.

![](https://github.com/zaphosting/docs/assets/42719082/ca890470-450d-4962-a982-39378dfbb695)

### Automatyczna kopia zapasowa

Oferujemy też opcję automatycznego tworzenia kopii zapasowych save'ów (i plików konfiguracyjnych) bezpośrednio przez panel administracyjny. Wystarczy, że wejdziesz do **Narzędzia->Kopie zapasowe** w panelu swojego serwera gier. Tam możesz ustawić harmonogram automatycznych backupów. Dajemy Ci 10 GB darmowego miejsca na kopie zapasowe. Więcej informacji o backupach znajdziesz w naszym dedykowanym [poradniku Kopie zapasowe](gameserver-backups.md).

## Wgrywanie Savegame

Podobnie jak przy tworzeniu kopii, wgrywanie save'a jest proste. Najpierw połącz się z serwerem gier przez klienta FTP. Następnie przejdź do ścieżki:
```
../Pal/Saved/SaveGames/0
```

![](https://screensaver01.zap-hosting.com/index.php/s/tadxngnRCJDbtTe/preview)

Po prostu przeciągnij i upuść swój save do tego folderu przez klienta FTP, a zostanie on przesłany na serwer.

:::tip
Warto skopiować nazwę folderu save'a, który wgrałeś, bo będzie Ci potrzebna do jego aktywacji w kolejnym kroku.
:::

## Aktywacja Savegame

Aby użyć konkretnego save'a, musisz edytować plik konfiguracyjny. Przejdź do jednej z poniższych ścieżek i znajdź plik **GameUserSettings.ini**:
```
../Pal/Saved/Config/WindowsServer/ # dla Windows
../Pal/Saved/Config/LinuxServer/ # dla Linux
```

W tym folderze otwórz plik **GameUserSettings.ini** i znajdź parametr `DedicatedServerName`.

Edytuj tę linię, wpisując nazwę folderu save'a, który chcesz aktywować na serwerze.

![](https://screensaver01.zap-hosting.com/index.php/s/qLG2jtzFkYM6WB7/preview)

Zapisz plik i zrestartuj serwer, aby zmiany zaczęły działać. Gratulacje, dodałeś save'a do swojego serwera gier.

## Savegame zniknął

W rzadkich przypadkach serwer może utworzyć nowy save zamiast załadować istniejący po starcie.

Najpierw sprawdź swoje save'y przez klienta FTP, przechodząc do:
```
../Pal/Saved/SaveGames/0
```

![](https://screensaver01.zap-hosting.com/index.php/s/wYQ42Aein5y6Z6j/preview)

Powinieneś zobaczyć stary save oraz nowy, który został wygenerowany. Aby to naprawić, po prostu edytuj plik konfiguracyjny zgodnie z opisem w sekcji [Aktywacja Savegame](#aktywacja-savegame), wpisując poprawną nazwę folderu save'a.

Save powinien być ponownie aktywny po zapisaniu pliku i restarcie serwera.

:::info
Zdecydowanie polecamy włączenie automatycznych kopii zapasowych, jak opisano w sekcji [Automatyczna kopia zapasowa](#automatyczna-kopia-zapasowa), ponieważ Palworld jest nadal w Early Access i istnieje ryzyko utraty lub uszkodzenia save'ów podczas aktualizacji.
:::

<InlineVoucher />